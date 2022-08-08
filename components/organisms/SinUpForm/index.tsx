import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import { useRouter } from "next/router";
import { toast } from "react-toastify"

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = () => {
    const userForm = {
      name,
      email,
      password,
    };
    if (name === "" || email === "" || password === "") {
      toast.error("please fill all fields")
    } else {
      localStorage.setItem("user-form", JSON.stringify(userForm));
      router.push("/sign-up-photo");
    }
  };

  const className = {
    label: cx("form-label text-lg fw-medium color-palette-1 mb-10"),
  };
  return (
    <>
      <form action="">
        <div className="pb-50">
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/icon/logo.svg" height={60} width={60} alt="Logo" />
            </a>
          </Link>
        </div>
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
        <p className="text-lg color-palette-1 m-0">
          Daftar dan bergabung dengan kami
        </p>
        <div className="pt-50">
          <label className={className.label}>Full Name</label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            aria-describedby="name"
            value={name}
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
            required
          />;
        </div>
        <div className="pt-30">
          <label className={className.label}>Email Address</label>
          <input
            type="email"
            className="form-control rounded-pill text-lg"
            value={email}
            aria-describedby="email"
            placeholder="Enter your email address"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="pt-30">
          <label className={className.label}>Password</label>
          <input
            type="password"
            className="form-control rounded-pill text-lg"
            value={password}
            aria-describedby="password"
            placeholder="Your password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="button-group d-flex flex-column mx-auto pt-50">
          <button
            type="button"
            className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
            role="button"
            onClick={onSubmit}
          >
            Continue
          </button>
          <a
            className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
            href="../src/sign-in.html"
            role="button"
          >
            Sign In
          </a>
        </div>
      </form>
    </>
  );
}
