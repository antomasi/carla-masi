import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Home } from "../containers/Home";
import { AboutMe } from "../containers/AboutMe";
import { Shop } from "../containers/Shop";
import { FreeResources } from "../containers/FreeResources";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/freeresources" element={<FreeResources />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
