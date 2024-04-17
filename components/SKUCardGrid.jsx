"use client";
import { useEffect, useState, useRef } from "react";
import { Box, Card, Sheet, Typography } from "@mui/joy";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import ToysOutlinedIcon from "@mui/icons-material/ToysOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import CarRepairOutlinedIcon from "@mui/icons-material/CarRepairOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import NaturePeopleOutlinedIcon from "@mui/icons-material/NaturePeopleOutlined";
import CoffeeMakerOutlinedIcon from "@mui/icons-material/CoffeeMakerOutlined";
import BlenderOutlinedIcon from "@mui/icons-material/BlenderOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import PianoOutlinedIcon from "@mui/icons-material/PianoOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import BackpackOutlinedIcon from "@mui/icons-material/BackpackOutlined";
import ChildFriendlyOutlinedIcon from "@mui/icons-material/ChildFriendlyOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import styles from "../css/SkuGrid.module.css";

const skus = [
  { name: "Paradon Gin", category: "Liquor", icon: <LiquorOutlinedIcon /> },
  { name: "Paradon Whiskey", category: "Liquor", icon: <LiquorOutlinedIcon /> },
  { name: "Paradon Puzzle", category: "Toys", icon: <ExtensionOutlinedIcon /> },
  { name: "Paradon Race Car", category: "Toys", icon: <ToysOutlinedIcon /> },
  {
    name: "Paradon Brake Pads",
    category: "Car Parts",
    icon: <CarRepairOutlinedIcon />,
  },
  {
    name: "Paradon Air Filter",
    category: "Car Parts",
    icon: <CarRepairOutlinedIcon />,
  },
  {
    name: "Paradon Croissant",
    category: "Food",
    icon: <BakeryDiningOutlinedIcon />,
  },
  {
    name: "Paradon Pasta",
    category: "Food",
    icon: <DinnerDiningOutlinedIcon />,
  },
  {
    name: "Paradon T-Shirt",
    category: "Clothes",
    icon: <CheckroomOutlinedIcon />,
  },
  {
    name: "Paradon Jeans",
    category: "Clothes",
    icon: <CheckroomOutlinedIcon />,
  },
  {
    name: "Paradon Laptop",
    category: "Electronics",
    icon: <LaptopMacOutlinedIcon />,
  },
  {
    name: "Paradon Smartphone",
    category: "Electronics",
    icon: <SmartphoneOutlinedIcon />,
  },
  {
    name: "Paradon Notebook",
    category: "Stationery",
    icon: <BookOutlinedIcon />,
  },
  {
    name: "Paradon Ballpoint Pens",
    category: "Stationery",
    icon: <BookOutlinedIcon />,
  },
  {
    name: "Paradon Lawn Mower",
    category: "Garden Tools",
    icon: <YardOutlinedIcon />,
  },
  {
    name: "Paradon Pruning Shears",
    category: "Garden Tools",
    icon: <YardOutlinedIcon />,
  },
  {
    name: "Paradon Fishing Rod",
    category: "Outdoor Gear",
    icon: <NaturePeopleOutlinedIcon />,
  },
  {
    name: "Paradon Camping Tent",
    category: "Outdoor Gear",
    icon: <NaturePeopleOutlinedIcon />,
  },
  {
    name: "Paradon Coffee Maker",
    category: "Home Appliances",
    icon: <CoffeeMakerOutlinedIcon />,
  },
  {
    name: "Paradon Blender",
    category: "Home Appliances",
    icon: <BlenderOutlinedIcon />,
  },
  {
    name: "Paradon Soccer Ball",
    category: "Sports Equipment",
    icon: <SportsSoccerOutlinedIcon />,
  },
  {
    name: "Paradon Basketball",
    category: "Sports Equipment",
    icon: <SportsBasketballOutlinedIcon />,
  },
  {
    name: "Paradon Dog Food",
    category: "Pet Supplies",
    icon: <PetsOutlinedIcon />,
  },
  {
    name: "Paradon Cat Litter",
    category: "Pet Supplies",
    icon: <PetsOutlinedIcon />,
  },
  {
    name: "Paradon Sunglasses",
    category: "Accessories",
    icon: <WatchOutlinedIcon />,
  },
  {
    name: "Paradon Watch",
    category: "Accessories",
    icon: <WatchOutlinedIcon />,
  },
  {
    name: "Paradon Guitar",
    category: "Musical Instruments",
    icon: <PianoOutlinedIcon />,
  },
  {
    name: "Paradon Drum Set",
    category: "Musical Instruments",
    icon: <PianoOutlinedIcon />,
  },
  {
    name: "Paradon Desk Lamp",
    category: "Home Decor",
    icon: <ChairOutlinedIcon />,
  },
  {
    name: "Paradon Throw Pillow",
    category: "Home Decor",
    icon: <ChairOutlinedIcon />,
  },
  {
    name: "Paradon Yoga Mat",
    category: "Fitness",
    icon: <FitnessCenterOutlinedIcon />,
  },
  {
    name: "Paradon Dumbbells",
    category: "Fitness",
    icon: <FitnessCenterOutlinedIcon />,
  },
  {
    name: "Paradon Umbrella",
    category: "Outdoor Accessories",
    icon: <BeachAccessOutlinedIcon />,
  },
  {
    name: "Paradon Backpack",
    category: "Outdoor Accessories",
    icon: <BackpackOutlinedIcon />,
  },
  {
    name: "Paradon Baby Diapers",
    category: "Baby Care",
    icon: <ChildFriendlyOutlinedIcon />,
  },
  {
    name: "Paradon Baby Formula",
    category: "Baby Care",
    icon: <ChildFriendlyOutlinedIcon />,
  },
  {
    name: "Paradon Tool Set",
    category: "DIY Supplies",
    icon: <HandymanOutlinedIcon />,
  },
  {
    name: "Paradon Paint Brushes",
    category: "DIY Supplies",
    icon: <BrushOutlinedIcon />,
  },
  {
    name: "Paradon Neck Pillow",
    category: "Travel Accessories",
    icon: <FlightOutlinedIcon />,
  },
  {
    name: "Paradon Passport Holder",
    category: "Travel Accessories",
    icon: <FlightOutlinedIcon />,
  },
  {
    name: "Paradon Towels",
    category: "Bathroom Accessories",
    icon: <ShowerOutlinedIcon />,
  },
  {
    name: "Paradon Shower Gel",
    category: "Bathroom Accessories",
    icon: <ShowerOutlinedIcon />,
  },
];

const colors = [
  "#FFADAD",
  "#FFD6A5",
  "#FDFFB6",
  "#E4F1EE",
  "#D9EDF8",
  "#DEDAF4",
];

function SKUCard() {
  const [empty, setEmpty] = useState(true);
  const [animationDelay, setAnimationDelay] = useState(Math.random() * 20);
  const [skuIndex, setSkuIndex] = useState(
    Math.floor(Math.random() * skus.length)
  );
  const [colorIndex, setColorIndex] = useState(
    Math.floor(Math.random() * colors.length)
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setEmpty(!empty); // Schedule the toggle of 'empty' after the animation and delay
      setAnimationDelay(0); // Reset delay to zero for the next animation
      setSkuIndex(Math.floor(Math.random() * skus.length)); // Randomize the SKU index
      setColorIndex(Math.floor(Math.random() * colors.length)); // Randomize the color index
    }, (animationDelay + 2) * 1000 + (empty ? 0 : 10000)); // Total duration + pause

    return () => clearTimeout(timeoutId);
  }, [empty, animationDelay]);

  return (
    <Card
      variant="outlined"
      sx={{
        height: "130px",
        width: "130px",
        borderRadius: "15px",
        overflow: "hidden", // Ensures that contents that might overflow are clipped
      }}
    >
      {/* Render contents only when not empty */}
      {!empty && (
        <Box
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // Apply animation regardless of the empty state
            animation: `${styles.fadeIn} 2s ease ${animationDelay}s 1, ${
              styles.fadeOut
            } 2s ease ${animationDelay + (empty ? 0 : 10)}s 1`,
          }}
        >
          <Sheet
            variant="soft"
            sx={{
              display: "flex",
              flex: 1,
              height: "40px",
              width: "90px",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15px",
              borderRadius: "40px",
              backgroundColor: colors[colorIndex],
            }}
          >
            {skus[skuIndex].icon}
          </Sheet>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "flex-end",
              marginBottom: "-5px",
              textAlign: "center",
            }}
          >
            <Typography level="title-sm">{skus[skuIndex].name}</Typography>
            <Typography level="body-xs">{skus[skuIndex].category}</Typography>
          </Box>
        </Box>
      )}
    </Card>
  );
}

export default function SKUCardGrid() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(232, 245, 252, 0.4)",
        alignItems: "center",
      }}
    >
      <Typography level="h3" sx={{ fontSize: 55 }}>
        Millions of SKUs
      </Typography>
      <Box
        sx={{
          paddingTop: "40px",
        }}
      >
        <Box className={styles.blurGradient}>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
            }}
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <SKUCard key={index} />
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: "20px", paddingTop: "20px" }}>
            {Array.from({ length: 8 }).map((_, index) => (
              <SKUCard key={index} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/*
"use client";
import { useEffect, useState, useRef } from "react";

import { Box, Card, Sheet, Typography } from "@mui/joy";

import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import ToysOutlinedIcon from "@mui/icons-material/ToysOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import CarRepairOutlinedIcon from "@mui/icons-material/CarRepairOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import NaturePeopleOutlinedIcon from "@mui/icons-material/NaturePeopleOutlined";
import CoffeeMakerOutlinedIcon from "@mui/icons-material/CoffeeMakerOutlined";
import BlenderOutlinedIcon from "@mui/icons-material/BlenderOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import PianoOutlinedIcon from "@mui/icons-material/PianoOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import BackpackOutlinedIcon from "@mui/icons-material/BackpackOutlined";
import ChildFriendlyOutlinedIcon from "@mui/icons-material/ChildFriendlyOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";

import styles from "../css/SkuGrid.module.css";

const skus = [
  { name: "Paradon Gin", category: "Liquor", icon: <LiquorOutlinedIcon /> },
  { name: "Paradon Whiskey", category: "Liquor", icon: <LiquorOutlinedIcon /> },
  { name: "Paradon Puzzle", category: "Toys", icon: <ExtensionOutlinedIcon /> },
  { name: "Paradon Race Car", category: "Toys", icon: <ToysOutlinedIcon /> },
  {
    name: "Paradon Brake Pads",
    category: "Car Parts",
    icon: <CarRepairOutlinedIcon />,
  },
  {
    name: "Paradon Air Filter",
    category: "Car Parts",
    icon: <CarRepairOutlinedIcon />,
  },
  {
    name: "Paradon Croissant",
    category: "Food",
    icon: <BakeryDiningOutlinedIcon />,
  },
  {
    name: "Paradon Pasta",
    category: "Food",
    icon: <DinnerDiningOutlinedIcon />,
  },
  {
    name: "Paradon T-Shirt",
    category: "Clothes",
    icon: <CheckroomOutlinedIcon />,
  },
  {
    name: "Paradon Jeans",
    category: "Clothes",
    icon: <CheckroomOutlinedIcon />,
  },
  {
    name: "Paradon Laptop",
    category: "Electronics",
    icon: <LaptopMacOutlinedIcon />,
  },
  {
    name: "Paradon Smartphone",
    category: "Electronics",
    icon: <SmartphoneOutlinedIcon />,
  },
  {
    name: "Paradon Notebook",
    category: "Stationery",
    icon: <BookOutlinedIcon />,
  },
  {
    name: "Paradon Ballpoint Pens",
    category: "Stationery",
    icon: <BookOutlinedIcon />,
  },
  {
    name: "Paradon Lawn Mower",
    category: "Garden Tools",
    icon: <YardOutlinedIcon />,
  },
  {
    name: "Paradon Pruning Shears",
    category: "Garden Tools",
    icon: <YardOutlinedIcon />,
  },
  {
    name: "Paradon Fishing Rod",
    category: "Outdoor Gear",
    icon: <NaturePeopleOutlinedIcon />,
  },
  {
    name: "Paradon Camping Tent",
    category: "Outdoor Gear",
    icon: <NaturePeopleOutlinedIcon />,
  },
  {
    name: "Paradon Coffee Maker",
    category: "Home Appliances",
    icon: <CoffeeMakerOutlinedIcon />,
  },
  {
    name: "Paradon Blender",
    category: "Home Appliances",
    icon: <BlenderOutlinedIcon />,
  },
  {
    name: "Paradon Soccer Ball",
    category: "Sports Equipment",
    icon: <SportsSoccerOutlinedIcon />,
  },
  {
    name: "Paradon Basketball",
    category: "Sports Equipment",
    icon: <SportsBasketballOutlinedIcon />,
  },
  {
    name: "Paradon Dog Food",
    category: "Pet Supplies",
    icon: <PetsOutlinedIcon />,
  },
  {
    name: "Paradon Cat Litter",
    category: "Pet Supplies",
    icon: <PetsOutlinedIcon />,
  },
  {
    name: "Paradon Sunglasses",
    category: "Accessories",
    icon: <WatchOutlinedIcon />,
  },
  {
    name: "Paradon Watch",
    category: "Accessories",
    icon: <WatchOutlinedIcon />,
  },
  {
    name: "Paradon Guitar",
    category: "Musical Instruments",
    icon: <PianoOutlinedIcon />,
  },
  {
    name: "Paradon Drum Set",
    category: "Musical Instruments",
    icon: <PianoOutlinedIcon />,
  },
  {
    name: "Paradon Desk Lamp",
    category: "Home Decor",
    icon: <ChairOutlinedIcon />,
  },
  {
    name: "Paradon Throw Pillow",
    category: "Home Decor",
    icon: <ChairOutlinedIcon />,
  },
  {
    name: "Paradon Yoga Mat",
    category: "Fitness",
    icon: <FitnessCenterOutlinedIcon />,
  },
  {
    name: "Paradon Dumbbells",
    category: "Fitness",
    icon: <FitnessCenterOutlinedIcon />,
  },
  {
    name: "Paradon Umbrella",
    category: "Outdoor Accessories",
    icon: <BeachAccessOutlinedIcon />,
  },
  {
    name: "Paradon Backpack",
    category: "Outdoor Accessories",
    icon: <BackpackOutlinedIcon />,
  },
  {
    name: "Paradon Baby Diapers",
    category: "Baby Care",
    icon: <ChildFriendlyOutlinedIcon />,
  },
  {
    name: "Paradon Baby Formula",
    category: "Baby Care",
    icon: <ChildFriendlyOutlinedIcon />,
  },
  {
    name: "Paradon Tool Set",
    category: "DIY Supplies",
    icon: <HandymanOutlinedIcon />,
  },
  {
    name: "Paradon Paint Brushes",
    category: "DIY Supplies",
    icon: <BrushOutlinedIcon />,
  },
  {
    name: "Paradon Neck Pillow",
    category: "Travel Accessories",
    icon: <FlightOutlinedIcon />,
  },
  {
    name: "Paradon Passport Holder",
    category: "Travel Accessories",
    icon: <FlightOutlinedIcon />,
  },
  {
    name: "Paradon Towels",
    category: "Bathroom Accessories",
    icon: <ShowerOutlinedIcon />,
  },
  {
    name: "Paradon Shower Gel",
    category: "Bathroom Accessories",
    icon: <ShowerOutlinedIcon />,
  },
];

const colors = [
  "#FFADAD",
  "#FFD6A5",
  "#FDFFB6",
  "#E4F1EE",
  "#D9EDF8",
  "#DEDAF4",
];

function SKUCard() {
  const [empty, setEmpty] = useState(true);
  const [skuIndex, setSkuIndex] = useState(
    Math.floor(Math.random() * skus.length)
  );
  const [colorIndex, setColorIndex] = useState(
    Math.floor(Math.random() * colors.length)
  );
  const [run, setRun] = useState(0);
  const initialDelay = Math.random() * 20;

  const fullDelay = 5;
  const emptyDelay = 5;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRun(run + 1);
      setEmpty(!empty); // Schedule the toggle of 'empty' after the animation and delay
      setSkuIndex(Math.floor(Math.random() * skus.length)); // Randomize the SKU index
      setColorIndex(Math.floor(Math.random() * colors.length)); // Randomize the color index
    }, (empty ? emptyDelay : fullDelay + 2) * 1000); // Total duration + pause

    return () => clearTimeout(timeoutId);
  }, [empty, run]);

  return (
    <Card
      variant="outlined"
      sx={{
        height: "130px",
        width: "130px",
        borderRadius: "15px",
        overflow: "hidden", // Ensures that contents that might overflow are clipped
      }}
    >
      {
        <Box
          id="animation-element"
          className="animation-element"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: `${styles.fadeIn} 2s ease ${
              empty ? emptyDelay : fullDelay
            }s 1, ${styles.fadeOut} 2s ease ${
              empty ? emptyDelay : fullDelay
            }s 1`,
          }}
        >
          <Sheet
            variant="soft"
            sx={{
              display: "flex",
              flex: 1,
              height: "40px",
              width: "90px",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15px",
              borderRadius: "40px",
              backgroundColor: colors[colorIndex],
            }}
          >
            {skus[skuIndex].icon}
          </Sheet>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "flex-end",
              marginBottom: "-5px",
              textAlign: "center",
            }}
          >
            <Typography level="title-sm">{skus[skuIndex].name}</Typography>
            <Typography level="body-xs">{skus[skuIndex].category}</Typography>
          </Box>
        </Box>
      }
    </Card>
  );
}

export default function SKUCardGrid() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(232, 245, 252, 0.4)",
        alignItems: "center",
      }}
    >
      <Typography level="h3" sx={{ fontSize: 55 }}>
        Millions of SKUs
      </Typography>
      <Box
        sx={{
          paddingTop: "40px",
        }}
      >
        <Box className={styles.blurGradient}>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
            }}
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <SKUCard key={index} />
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: "20px", paddingTop: "20px" }}>
            {Array.from({ length: 8 }).map((_, index) => (
              <SKUCard key={index} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
*/
