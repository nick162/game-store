import React, { useEffect, useState, useCallback } from "react";
import { getMemberOverview } from "../../../services/player";
import Category from "./Category";
import { toast } from "react-toastify";
import TableContent from "./TableContent";
import {
  HistoryTransactionTypes,
  TopupCategoryTypes,
} from "../../../services/data-types";

export default function OverviewContent() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState([]);

  const getDetailMemberOverview = useCallback(async () => {
    const response = await getMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      setData(response.data.data);
      setCount(response.data.count);
    }
  }, [getMemberOverview]);

  useEffect(() => {
    getDetailMemberOverview();
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                {count.map((item: TopupCategoryTypes) => (
                  <Category
                    key={item._id}
                    nominal={item.valeu}
                    icon="ic-game-desktop"
                  >
                    {item.name}
                  </Category>
                ))}
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item: HistoryTransactionTypes) => (
                    <TableContent
                      title={item.historyVoucherTopup.gameName}
                      category={item.historyVoucherTopup.category}
                      quantity={item.historyVoucherTopup.coinQuantity}
                      coinName={item.historyVoucherTopup.coinName}
                      price={item.historyVoucherTopup.price}
                      status={item.status}
                      image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
