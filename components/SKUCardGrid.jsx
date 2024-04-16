import { Box, Card, Sheet, Typography } from "@mui/joy";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import styles from "../css/SkuGrid.module.css";

function SKUCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "130px",
        width: "130px",
        borderRadius: "15px",
        alignItems: "center",
      }}
    >
      <Sheet
        color="primary"
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
        }}
      >
        <LiquorOutlinedIcon />
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
        <Typography level="title-sm">Paradon Gin</Typography>
        <Typography level="body-xs">Liquor</Typography>
      </Box>
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
