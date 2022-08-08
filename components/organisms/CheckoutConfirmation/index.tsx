/* eslint-disable react/self-closing-comp */
import React from "react";
import { toast } from 'react-toastify';
import { useState } from 'react';
import { setCheckOut } from '../../../services/player'
import { useRouter } from 'next/router';

export default function CheckoutConfrimation() {
  const [checkbox, setCheckbox] = useState(false)
  const router = useRouter();

  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem('data-item');
    const dataTopUpLocal = localStorage.getItem('data-topup')

    const dataItem = JSON.parse(dataItemLocal!)
    const dataTopUp = JSON.parse(dataTopUpLocal!)

    if (!checkbox) {
      toast.error('Pastikan anda telah melakukan pembayaran')
    }

    const data = {
      voucher: dataItem._id,
      nominal: dataTopUp.nominalItem._id,
      payment: dataTopUp.paymentItem.payment._id,
      bank: dataTopUp.paymentItem.bank._id,
      name: dataTopUp.bankAccountName,
      accountUser: dataTopUp.verifyID,
    };

    const response = await setCheckOut(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('CheckOut Berhasil');
      router.push('/complete-checkout')
    }
    // console.log('data :',data)
  }
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          type="button"
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
