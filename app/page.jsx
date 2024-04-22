import Image from "next/image";
import { Box, Typography } from "@mui/joy";
import { HeadlineBookDemoButton } from "../components/BookDemoButton";
import ImageContainer from "../components/ImageContainer";
import NavBar from "../components/NavBar";
import SKUCardGrid from "../components/SKUCardGrid";
import DynamicLinesBox from "../components/DynamicLinesBox";
import PricingSection from "../components/PricingSection";
import "./globals.css";
// import SolutionSection from "../components/SolutionSection";
import Integrations from "../components/Integrations";
import BenefitsSection from "@/components/BenefitsSection";
import StepSection from "@/components/StepSection";
import SupportSection from "@/components/SupportSection";
import Divider from "@/components/Divider";

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
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "850px",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "rgba(232, 245, 252, 0.4)",
          }}
        >
          <Typography level="body" variant="neutral" sx={{ fontSize: 20 }}>
            The Solution
          </Typography>
          <Typography level="h3" sx={{ fontSize: 55 }}>
            Paradon AI is a Forecasting Co-Pilot and Command Center
          </Typography>
        </Box>
        {/* <Divider /> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(232, 245, 252, 0.4)",
          }}
        >
          {/* <SolutionSection /> */}
          {/* <BenefitsSection /> */}
          <Box sx={{ height: "40px" }} /> {/* Temporary Spacer */}
          <StepSection />
        </Box>

        <Divider />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(232, 245, 252, 0.4)",
          }}
        >
          <Integrations />
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(232, 245, 252, 0.4)",
          }}
        >
          <SupportSection />
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(232, 245, 252, 0.4)",
          }}
        >
          <PricingSection />
        </Box>
      </DynamicLinesBox>
    </Box>
  );
}
