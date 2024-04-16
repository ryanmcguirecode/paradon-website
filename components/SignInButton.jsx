"use client";
import { Button } from "@mui/joy";

export default function SignInButton() {
  return (
    <Button
      variant="outlined"
      color="neutral"
      onClick={() => console.log("Sign in button not implemented")}
      sx={{ border: "1px solid rgb(227, 232, 240)" }}
    >
      Sign in
    </Button>
  );
}
