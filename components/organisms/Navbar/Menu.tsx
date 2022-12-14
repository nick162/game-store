import React from "react";
import cx from "classnames";
import Link from "next/link";

interface MenuPrps {
  title: string;
  href: string;
  active?: boolean;
}
export default function Menu(props: Partial<MenuPrps>) {
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
