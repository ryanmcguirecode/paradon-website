import { Box, Typography } from "@mui/joy";

export default function StepSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: "40px",
        boxSizing: "border-box",
        backgroundColor: "#e8f5fc",
        padding: "10px",
      }}
    >
      <Typography>Step 1</Typography>
      <Typography>Step 2</Typography>
      <Typography>Step 3</Typography>
    </Box>
  );
}
