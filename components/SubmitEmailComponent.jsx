"use client";

import { useState } from "react";
import { Box, Typography, Input, Button } from "@mui/joy";

export default function SubmitEmailComponent() {
  const [emailValid, setEmailValid] = useState(false);

  const validateEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmailValid(validateEmail(email));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Input
        placeholder="Enter your email"
        onChange={handleEmailChange}
        size="lg"
        sx={{ marginRight: "5px" }}
      />
      <Button size="lg" disabled={!emailValid}>
        Contact Us
      </Button>
    </Box>
  );
}
