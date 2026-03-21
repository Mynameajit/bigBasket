import { Box, Typography, Grid } from "@mui/material";
import { Beverages } from "../../constants/categories";

const BeveragesSection = () => {
  return (
    <Box sx={{ width: "100%",mt:2 }}>
      {/* 🔥 Title */}
      <Typography fontSize={22} fontWeight="bold" mb={2}>
        Beverages
      </Typography>

      {/* 🧩 Grid */}
      <Grid container spacing={3}>
        {Beverages.map((item) => (
         <Grid item xs={6} sm={4} md={2} key={item.id}>
      <Card item={item} />
    </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BeveragesSection;


const Card = ({ item }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight:"100px",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      {/* 🖼 Image */}
      <Box
        sx={{
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={item.image}
          style={{ width: "100%", height:"126px", objectFit: "contain" }}
        />
      </Box>

     
    </Box>
  );
};