import React, { useEffect, useState } from "react";
// import Link from "next/link"
import Image from "next/image";
import SideBar from "../../components/organisms/SideBar";
import Input from "../../components/atoms/Input";
import jwt_token from "jwt-decode";
import Cookies from "js-cookie";
import { PayloadUser, UserTypes } from "../../services/data-types";
import { updateProfil } from "../../services/player";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface userProps {
  id: string;
  name: string;
  email: string;
  avatar: any;
  phoneNumber: string;
}

export default function EditProfile() {
  const [user, setUser] = useState<userProps>({
    id: "",
    name: "",
    email: "",
    avatar: "",
    phoneNumber: "",
  });

  const [imagePreview, setImagePreview] = useState("/");
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: PayloadUser = jwt_token(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
      setUser(userFromPayload);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();
    data.append("image", user.avatar);
    data.append("name", user.name);
    data.append("phoneNumber", user.phoneNumber);
    const response = await updateProfil(data);
    if (response.error) {
      toast.error(response.error);
    } else {
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };
  return (
    <>
      <section className="edit-profile overflow-auto">
        <SideBar ActiveMenu="settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      {imagePreview === "/" ? (
                        <img
                          src={user.avatar}
                          width={90}
                          height={90}
                          style={{ borderRadius: "100%" }}
                        />
                      ) : (
                        <img
                          src={imagePreview}
                          width={90}
                          height={90}
                          style={{ borderRadius: "100%" }}
                        />
                      )}
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        const img = event.target.files![0];
                        setImagePreview(URL.createObjectURL(img));
                        return setUser({
                          ...user,
                          avatar: img,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input
                    label="Full Name"
                    value={user.name}
                    onChange={(event: any) => setUser({
                      ...user,
                      name: event.target.value,
                    })}
                  />
                </div>
                <div className="pt-30">
                  <Input label="Email Address" value={user.email} disabled />
                </div>
                <div className="pt-30">
                  <Input
                    label="Phone Number"
                    value={user.phoneNumber}
                    onChange={(event: any) => setUser({
                      ...user,
                      phoneNumber: event.target.value,
                    })}
                  />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="button"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    onClick={onSubmit}
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
