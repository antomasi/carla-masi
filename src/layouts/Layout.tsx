import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container, Box } from "@mui/material";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Header />
        {children}
        <Footer />
      </Box>
    </Container>
  );
};
