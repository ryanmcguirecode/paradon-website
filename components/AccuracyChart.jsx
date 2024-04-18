"use client";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import { Box, Typography, Option, Select, Avatar } from "@mui/joy";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import styles from "../css/AccuracyChart.module.css";

function RadarChart() {
  const lineWidths = [200, 280, 200, 280, 200, 280, 200, 280];
  const avatarPositions = [
    { left: "93%", top: "7%" },
    { left: "7%", top: "7%" },
    { left: "7%", top: "93%" },
    { left: "93%", top: "93%" },
    { left: "50%", top: "7%" },
    { left: "7%", top: "50%" },
    { left: "50%", top: "93%" },
    { left: "93%", top: "50%" },
  ];
  const animationLength = 7;

  //   const [animationKey, setAnimationKey] = useState(0); // Key to trigger re-renders
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setAnimationKey((prevKey) => prevKey + 1);
  //     }, 5 * 1000);

  //     return () => clearInterval(timer);
  //   }, []);

  const Icon = (index) => {
    const { left, top } = avatarPositions[index];
    const animationDelay = index * animationLength;

    return (
      <Avatar
        color="primary"
        sx={{
          position: "absolute",
          zIndex: 2,
          left: left,
          top: top,
          transform: "translate(-50%, -50%)",
          animation: `${styles.moveAndDisappear} ${animationLength}s ${animationDelay}s linear forwards`,
        }}
      >
        <AcUnitIcon />
      </Avatar>
    );
  };

  const Line = ({ angle, width }) => (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        height: "1px",
        width: width + "px",
        backgroundColor: "rgb(222, 225, 225)",
        transformOrigin: "left",
        transform: `rotate(${angle}deg)`,
        zIndex: 1,
      }}
    />
  );

  return (
    <Box
      sx={{
        width: 440,
        height: 440,
        border: "1px solid #d7dede",
        borderRadius: "10px",
        padding: "5px",
        backgroundColor: "rgb(249, 251, 254)",
        position: "relative", // Important for positioning the lines absolutely
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "150px",
          height: "150px",
          borderRadius: "100%",
          backgroundColor: "rgba(255, 255, 255, 1)",
          backdropFilter: "blur(100px)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1001,
          position: "relative", // This keeps the lines beneath the text
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography sx={{ paddingTop: "15px", zIndex: 1002 }}>
          Forecast
        </Typography>
        <Typography
          level="h4"
          sx={{ paddingTop: "15px", fontSize: 26, zIndex: 1002 }}
        >
          100 units
        </Typography>
        {/* Insert the lines */}
      </Box>
      {Array.from({ length: 8 }).map((_, index) => (
        <Line key={index} angle={index * 45} width={lineWidths[index]} />
      ))}
      {avatarPositions.map((position, index) => Icon(index))}
    </Box>
  );
}

export default function AccuracyChart() {
  const options = {
    series: [
      {
        name: "Predicted",
        data: [150, 170, 254, 374, 315, 186],
      },
      {
        name: "Actual",
        data: [135, 180, 242, 333, 300, 200],
      },
    ],

    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    xaxis: {
      categories: ["Mar", "Apr", "May", "Jun", "Aug", "Sep"],
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      min: 50,
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 500,
        },
        formatter: function (value, index) {
          // Only show every other label
          return index % 2 === 1 ? value : "";
        },
      },
    },
  };
  return (
    <>
      <Typography level="body" variant="neutral" sx={{ fontSize: 20 }}>
        The Solution
      </Typography>
      <Typography level="h3" sx={{ fontSize: 55 }}>
        Near Perfect Predictions
      </Typography>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          backgroundColor: "rgba(232, 245, 252, 0.4)",
          marginTop: "40px",
          border: "1px solid #d7dede",
          borderRadius: "15px",
          boxSizing: "border-box",
          backgroundColor: "#e8f5fc",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "15px",
          }}
        >
          <Box
            sx={{
              border: "1px solid #d7dede",
              borderRadius: "10px",
              padding: "5px",
              backgroundColor: "rgb(249, 251, 254)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 15px 20px 20px",
              }}
            >
              <Typography level="h4" sx={{ fontSize: 25 }}>
                Flip Flop Sales
              </Typography>
              <Select defaultValue="2023" sx={{ height: "40px" }}>
                <Option value="2023">2023</Option>
              </Select>
            </Box>
            <Chart
              options={options}
              series={options.series}
              type="line"
              height={350}
              width={500}
            />
          </Box>
          <RadarChart />
          {/* <Box
            sx={{
              display: "flex",
              width: 500,
              height: 500,
              border: "1px solid #d7dede",
              borderRadius: "10px",
              padding: "5px",
              backgroundColor: "rgb(249, 251, 254)",
              alignItems: "center",
              justifyContent: "center",
              position: "relative", // Needed to position lines absolutely
            }}
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  position: "absolute",
                  height: "1px",
                  width: "100px",
                  backgroundColor: "black",
                  transformOrigin: "left",
                  transform: `rotate(${index * (360 / 8)}deg) translateX(75px)`, // Position each line
                  backgroundColor: "rgb(222, 225, 225)",
                }}
              />
            ))}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "150px",
                height: "150px",
                borderRadius: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
              }}
            >
              <Typography sx={{ paddingTop: "15px" }}>Forecast</Typography>
              <Typography level="h4" sx={{ paddingTop: "15px", fontSize: 26 }}>
                100 units
              </Typography>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </>
  );
}
