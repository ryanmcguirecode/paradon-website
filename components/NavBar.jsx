"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/joy";
import SignInButton from "./SignInButton";
import { BookDemoButton } from "./BookDemoButton";

export default function NavBar() {
  const logo = (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Image
        src="/logo.png"
        width={23}
        height={23}
        style={{ paddingRight: "5px" }}
      />
      <Typography level="h4">Paradon</Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        position: "fixed",
        height: "65px",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          maxWidth: "1150px",
          display: "flex",
          margin: "auto",
          paddingTop: "12px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {logo}
        <Box sx={{ display: "flex", gap: "10px" }}>
          <SignInButton />
          <BookDemoButton />
        </Box>
      </Box>
    </Box>
  );
}
