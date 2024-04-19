"use client";
import { Box, Typography, Avatar } from "@mui/joy";
import styles from "../css/SupportSection.module.css";

export default function SupportSection() {
  const avatarPositions = [];
  const circlePositions = [{ left: "50%", top: "0%" }];
  const icons = [];
  const animationLength = 20;

  const Icon = (index) => {
    const { left, top } = avatarPositions[index];

    return (
      <Avatar
        key={animationCycleKey}
        variant="plain"
        sx={{
          position: "absolute",
          zIndex: 2,
          left: left,
          top: top,
          opacity: 0,
          transform: "translate(-50%, -50%)",
          //   animation: `${styles.moveAndDisappear} ${animationLength}s ${animationDelay}s linear forwards`,
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {icons[index][Math.floor(Math.random() * icons[index].length)]}
      </Avatar>
    );
  };

  const Circle = (index) => {
    const { left, top } = circlePositions[index];

    return (
      <Box
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.93)",
          border: "1px solid #d7dede",
          zIndex: 4,
          position: "absolute",
          left: "50%",
          top: "0%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        width: 880,
        height: 440,
        border: "1px solid #d7dede",
        borderRadius: "10px",
        // padding: "5px",
        backgroundColor: "rgb(249, 251, 254)",
        position: "relative",
        zIndex: 3,
      }}
    >
      <Box
        sx={{
          width: "150px",
          height: "150px",
          borderRadius: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.93)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 4,
          position: "relative",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Box
        sx={{
          width: "250px",
          height: "250px",
          borderRadius: "100%",
          backgroundColor: "transparent",
          border: "1px solid #d7dede",
          zIndex: 3,
          position: "absolute",
          left: "150px",
          top: "95px",
          animation: `${styles.spin} ${animationLength}s 0s linear infinite`,
        }}
      >
        {Circle(0)}
      </Box>
      <Box
        sx={{
          width: "250px",
          height: "250px",
          borderRadius: "100%",
          backgroundColor: "transparent",
          border: "1px solid #d7dede",
          zIndex: 3,
          position: "absolute",
          right: "150px",
          top: "95px",
          animation: `${styles.spin} ${animationLength}s 0s linear infinite`,
        }}
      >
        {Circle(0)}
      </Box>
    </Box>
  );
}
