import { Box, Typography } from "@mui/material";
import { categoryData } from "../../constants/categories";

const FruitsVegSection = () => {
  return (
    <Box sx={{ mt: 2 }}>
      {/* 🔥 Title */}
      <Typography fontSize={22} fontWeight="bold" mb={2}>
        Fruits and Vegetables
      </Typography>

      {/* 🧩 Cards */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {categoryData.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default FruitsVegSection;

const CategoryCard = ({ item }) => {
  return (
    <Box
      sx={{
        width: 265,
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
          height: 200,

          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={item.image} width="100%" height={"100%"}/>
      </Box>

      {/* 🔽 Content */}
      <Box sx={{ p: 2 }}>
       
        {/* 🔥 Offer Row */}
       
      </Box>
    </Box>
  );
};
