import React from "react";
import { FooterLayout, NavbarLayout } from "@/layout";

const Main = ({ children, locale }: { children: React.ReactNode,locale:string }) => {
  return (
    <div>
      <div className="flex flex-col ">
        <NavbarLayout locale={locale}/>
        <main className="bg-white">{children}</main>
      </div>
      <FooterLayout />
    </div>
  );
};

export default Main;
