import React from "react";
import Footer from "./Footer";
import Profile from "./Profile";
import MenuItems from "./MenuItems";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Navbar from "../Navbar";

interface SideBarProps {
  ActiveMenu: "overview" | "transactions" | "settings";
}

export default function SideBar(props: SideBarProps) {
  const { ActiveMenu } = props;

  const router = useRouter();

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  };
  return (
    <>
      <Navbar />
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItems
              icon="ic-menu-overview"
              title="Overview"
              active={ActiveMenu === "overview"}
              href="/member"
            />
            <MenuItems
              icon="ic-menu-transactions"
              title="Transactions"
              href="/member/transactions"
              active={ActiveMenu === "transactions"}
            />
            <MenuItems
              icon="ic-menu-messages"
              title="Messages"
              href="/member"
            />
            <MenuItems icon="ic-menu-card" title="Cards" href="/member" />
            <MenuItems icon="ic-menu-rewards" title="Rewards" href="/member" />
            <MenuItems
              icon="ic-menu-settings"
              title="Settings"
              href="/member/edit-profile"
              active={ActiveMenu === "settings"}
            />
            <MenuItems
              icon="ic-menu-logout"
              title="Log Out"
              onClick={onLogout}
            />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
