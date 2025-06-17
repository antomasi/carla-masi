import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Home } from "../containers/Home";
import { AboutMe } from "../containers/AboutMe";
import { Servicies } from "../containers/Servicies";
import { Contact } from "../containers/Contact";
import { Blog } from "../containers/Blog";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/servicies" element={<Servicies />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
