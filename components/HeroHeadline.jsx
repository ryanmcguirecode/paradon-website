import { HeadlineBookDemoButton } from "@/components/BookDemoButton";
import { Box, Typography } from "@mui/joy";

export default function HeroHeadline() {
  return (
    <Box
      sx={{
        // backgroundColor: "rgba(241, 249, 253, 0.4)",
        maxWidth: "800px",
        margin: "auto",
        paddingTop: "130px",
      }}
    >
      <Typography
        level="h3"
        sx={{
          margin: "auto",
          textAlign: "center",
          fontSize: "75px",
          lineHeight: "85px",
        }}
      >
        Industry Leading Demand Forecasting
      </Typography>
      <Typography
        level="body-lg"
        sx={{
          maxWidth: "500px",
          margin: "auto",
          textAlign: "center",
          paddingTop: "8px",
        }}
      >
        Explainable AI and actionable insights to improve your forecasting and
        bottom line.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <HeadlineBookDemoButton />
      </Box>
    </Box>
  );
}
