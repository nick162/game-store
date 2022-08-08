import axios from "axios";
import callAPI from "../config/api";
import { CheckOutTypes, GameItemsTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getFeatureGame(data: GameItemsTypes) {
  const url = `${ROOT_API}/${API_VERSION}/players/landingpage`;

  return callAPI({
    url,
    method: "GET",
    data,
  });
}

export async function getVoucherDetail(id: string) {
  const URL_API = `players/${id}/detail`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL_API}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getPaymentsDetail() {
  const URL_API = `players/paymentDetail`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL_API}`);
  const axiosResponse = response.data;

  return axiosResponse.payments;
}

export async function getGameCategory() {
  const URL_API = `players/category`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL_API}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function setCheckOut(data: CheckOutTypes) {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`;

  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}

export async function getMemberOverview() {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getHistoryPlayerTransaction(valueParams: string) {
  let params = "";
  if (valueParams === "all") {
    params = "";
  } else {
    params = `?status=${valueParams}`;
  }
  const url = `${ROOT_API}/${API_VERSION}/players/history${params}`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getTransactionDetail(id: string, token: string) {
  const url = `${ROOT_API}/${API_VERSION}/players/history/${id}/detail`;

  return callAPI({
    url,
    method: "GET",
    serverToken: token,
  });
}

export async function updateProfil(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/players/profile`;

  return callAPI({
    url,
    method: "PUT",
    data,
    token:true
  });
}
