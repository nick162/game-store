import React from "react";
import SideBar from "../../../components/organisms/SideBar";
import TransactionsContent from "../../../components/organisms/TransactionsContent";
import { PayloadUser, UserTypes } from "../../../services/data-types";
import jwt_token from "jwt-decode";

export default function index() {
  return (
    <>
      <section className="transactions overflow-auto">
        <SideBar ActiveMenu="overview" />
        <TransactionsContent />
      </section>
    </>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {
    },
  };
}
