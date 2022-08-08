import React from "react";
import NumberFormat from "react-number-format";
import cx from "classnames";

interface TableContentProps {
  title: string;
  category: string;
  quantity: string;
  coinName: string;
  price: number;
  image: string;
  status: string;
}

export default function TableContent(props: TableContentProps) {
  const { title, category, quantity, price, status, image, coinName } = props;
  const statusClass = cx({
    "float-start icon-status": true,
    pending: status === "pending",
    succes: status === "success",
    failed: status === "failed",
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={image}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{quantity} {coinName}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          <NumberFormat
            value={price}
            prefix="Rp. "
            thousandSeparator="."
            displayType="text"
            decimalSeparator=","
          />
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
