import React from "react";
import NumberFormat from "react-number-format";
import { ReactNode } from "react"

interface CategoryProps {
  nominal: number;
  children: ReactNode;
  icon: "ic-game-desktop" | "ic-game-mobile" | "ic-game-other-categories";
}

export default function Category(props: CategoryProps) {
  const { nominal, children, icon } = props;
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <img src={`/icon/${icon}.svg`} height={60} width={60} />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            <NumberFormat
              value={nominal}
              prefix="Rp. "
              thousandSeparator="."
              displayType="text"
              decimalSeparator=","
            />
          </p>
        </div>
      </div>
    </div>
  );
}
