import React from "react";
import SideBar from "../../../components/organisms/SideBar";
import TransactionsDetailContent from "../../../components/organisms/TransactionsDetailContent";
import {
  HistoryTransactionTypes,
  PayloadUser,
  UserTypes,
} from "../../../services/data-types";
import jwt_token from "jwt-decode";
import { getTransactionDetail } from "../../../services/player";

interface TransactionDetailProps {
  transactionDetail: HistoryTransactionTypes;
}
export default function detail(props: TransactionDetailProps) {
  const { transactionDetail } = props;
  // console.log('detail :', transactionDetail)
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <SideBar ActiveMenu="overview" />
        <TransactionsDetailContent data={transactionDetail} />
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
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { token } = req.cookies;
  const { idTrx } = params;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: PayloadUser = jwt_token(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await getTransactionDetail(idTrx, jwtToken);
  // console.log('respones :', response)
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
