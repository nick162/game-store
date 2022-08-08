import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react"
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { setLogin } from "../../../services/auth";
import Cookies from 'js-cookie';

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const onSubmit = async () => {
    const data = {
      email,
      password
    }
    // console.log('data', data);
    if (!email || !password) {
      toast.error('email dan password wajib diisi')
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message)
      } else {
        toast.success('Login success')
        const { token } = response.data
        const tokenBase64 = btoa(token)
        Cookies.set('token', tokenBase64, { expires: 1 })
        router.push('/')
      }
    }
  };
  return (
    <>
      <form action="">
        <div className="container mx-auto">
          <div className="pb-50">
            <Link href="/">
              <a className="navbar-brand">
                <Image src="/icon/logo.png" width={60} height={60} alt="logo" />
              </a>
            </Link>
          </div>
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
          <p className="text-lg color-palette-1 m-0">
            Masuk untuk melakukan proses top up
          </p>
          <div className="pt-50">
            <label
              htmlFor="email"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Email Address
            </label>
            <input
              type="email"
              className="form-control rounded-pill text-lg"
              aria-describedby="email"
              placeholder="Enter your email address"
              value={email}
              onChange={((event) => setEmail(event.target.value))}
            />
          </div>
          <div className="pt-30">
            <label
              htmlFor="password"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-pill text-lg"
              aria-describedby="password"
              placeholder="Your password"
              value={password}
              onChange={((event) => setPassword(event.target.value))}
            />
          </div>
          <div className="button-group d-flex flex-column mx-auto pt-50">
              <button
                type="button"
                className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                onClick={onSubmit}
              >
                Continue to Sign In
              </button>
            <Link href="/sign-up">
              <a
                className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                role="button"
              >
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
