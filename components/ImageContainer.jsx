import { Box } from "@mui/joy";

export default function ImageContainer({ width, height, children }) {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        padding: "10px",
        border: "1px solid #d7dede",
        borderRadius: "40px",
        boxSizing: "border-box",
        backgroundColor: "rgb(242, 249, 254)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "10px",
          border: "1px solid #d7dede",
          borderRadius: "35px",
          boxSizing: "border-box",
          backgroundColor: "rgb(233, 245, 252)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {children}
        </div>
      </Box>
    </Box>
  );
}
