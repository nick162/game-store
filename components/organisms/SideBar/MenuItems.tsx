import React from "react";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemsProps {
  icon:
    | "ic-menu-overview"
    | "ic-menu-transactions"
    | "ic-menu-messages"
    | "ic-menu-card"
    | "ic-menu-rewards"
    | "ic-menu-settings"
    | "ic-menu-logout";
  title: string;
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function MenuItems(props: Partial<MenuItemsProps>) {
  const { icon, title, active, href = "/sign-in", onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="menu" />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
