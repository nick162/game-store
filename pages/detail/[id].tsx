import React from "react";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import TopUpForm from "../../components/organisms/TopUpForm";
import TopUpItem from "../../components/organisms/TopUpItem";
import { useRouter } from "next/router";
import { useEffect, useCallback, useState } from "react";
import { getVoucherDetail, getPaymentsDetail } from "../../services/player";

export default function Detail() {
  const { query, isReady } = useRouter();

  const [nominals, setDataNominal] = useState([]);
  const [dataItem, setDataItem] = useState({
    name: "",
    thumbnail: "",
    category: {
      name: "",
    },
  });

  const [paymentItem, setDataPayment] = useState([]);

  const getPaymentDetailApi = useCallback(async () => {
    const dataPayment = await getPaymentsDetail();
    // console.log(payments)
    setDataPayment(dataPayment);
    localStorage.setItem("data-payment", JSON.stringify(dataPayment));
  }, []);

  const getVoucherDtailApi = useCallback(async (id) => {
    const data = await getVoucherDetail(id);
    setDataNominal(data.nominals);
    setDataItem(data);
    localStorage.setItem("data-item", JSON.stringify(data));
  }, []);

  useEffect(() => {
    if (isReady) {
      // console.log('router sudah tersedia', query.id)
      getPaymentDetailApi();
      getVoucherDtailApi(query.id);
    }
    //  else {
    //   console.log('router tidak tersedia')
    // }
  }, [isReady]);

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <div className="row align-items-center">
                {/* Mobile: Game title  */}
                <TopUpItem data={dataItem} type="mobile" />
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              {/* Desktop: Game title  */}
              <TopUpItem data={dataItem} type="desktop" />
              <hr />
              <TopUpForm nominals={nominals} payments={paymentItem} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
