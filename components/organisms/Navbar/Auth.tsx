import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { PayloadUser, UserTypes } from "../../../services/data-types";
import { useRouter } from "next/router";

interface AuthProps {
  isLogin: boolean;
}

export default function Auth(props: Partial<AuthProps>) {
  const [isLogin, setIslogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwt_token = atob(token);
      const payload: PayloadUser = jwt_decode(jwt_token);
      const userFromPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
      setIslogin(true);
      setUser(user);
    }
  }, []);

  const onLogOut = () => {
    Cookies.remove("token");
    router.push("/");
    setIslogin(false);
  };
  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.avatar}
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  My Wallet
                </a>
              </Link>
            </li>
            <li>
              <Link href="/member/transactions/edit-profile">
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  Account Settings
                </a>
              </Link>
            </li>
            <li onClick={onLogOut}>
              <a className="dropdown-item text-lg color-palette-2" href="#">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <a
        className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
        href="/sign-in"
        role="button"
      >
        Sign In
      </a>
    </li>
  );
}
