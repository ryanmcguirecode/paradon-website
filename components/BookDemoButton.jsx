"use client";
import { useState } from "react";
import { Button, Typography } from "@mui/joy";
import styles from "../css/BookDemoButton.module.css";

export function BookDemoButton() {
  <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
    Sketch
  </button>;
  return (
    <Button
      variant="outlined"
      color="neutral"
      onClick={() => console.log("Book demo button not implemented")}
      sx={{
        border: "1px solid black",
        backgroundColor: "black",
        "&:hover": {
          backgroundColor: "black", // Change background color on hover
        },
      }}
    >
      <Typography textColor="white" level="body-sm">
        Book a demo
      </Typography>
    </Button>
  );
}

export function HeadlineBookDemoButton() {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={styles.demoButton}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Typography
        level="title-lg"
        sx={{
          paddingBottom: "10px",
          paddingTop: "10px",
        }}
      >
        Book a demo
      </Typography>
    </button>
  );
}
