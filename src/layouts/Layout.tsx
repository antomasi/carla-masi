import React from "react";
import "../assets/css/Layout.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};
