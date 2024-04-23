"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/joy";

export default function Logo() {
  return (
    <Box
      onClick={() => window.location.replace("/")}
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Image
        src="/logo.png"
        width={23}
        height={23}
        style={{ paddingRight: "5px" }}
      />
      <Typography level="h4">Paradon</Typography>
    </Box>
  );
}
