import Image from "next/image";
import { Box, Typography } from "@mui/joy";
import { HeadlineBookDemoButton } from "../components/BookDemoButton";
import ImageContainer from "../components/ImageContainer";
import NavBar from "../components/NavBar";
import SKUCardGrid from "../components/SKUCardGrid";
import DynamicLinesBox from "../components/DynamicLinesBox";
import PricingSection from "../components/PricingSection";
import "./globals.css";
import AccuracyChart from "@/components/AccuracyChart";

export default function Home() {
  const headline = (
    <Box
      sx={{
        backgroundColor: "rgba(232, 245, 252, 0.4)",
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
        Cutting-edge AI, Explainability, and Actionable Insights to improve your
        forecasting and bottom line.
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

  const uiImage = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <ImageContainer width="1250px" height="645px">
        <Image
          src="/ui-screenshot.png"
          fill
          style={{
            objectFit: "contain",
            borderRadius: "25px",
            border: "1px solid #d7dede",
          }}
        />
      </ImageContainer>
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <NavBar />
      <DynamicLinesBox>
        {headline}
        {uiImage}
        <Box
          sx={{
            paddingTop: "200px",
            backgroundColor: "rgba(232, 245, 252, 0.4)",
          }}
        >
          <SKUCardGrid />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "200px",
            backgroundColor: "rgba(232, 245, 252, 0.4)",
          }}
        >
          <AccuracyChart />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "200px",
            backgroundColor: "rgba(232, 245, 252, 0.4)",
          }}
        >
          <PricingSection />
        </Box>
      </DynamicLinesBox>
    </Box>
  );
}
