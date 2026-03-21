import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import SmartCard from "./ProductCard";
import { bestSellersData } from "../../constants/productService";

const BestSellers = () => {
  const scrollRef = useRef();

  const scroll = (dir) => {
    if (dir === "left") scrollRef.current.scrollLeft -= 300;
    else scrollRef.current.scrollLeft += 300;
  };

  return (
    <Box sx={{ p: 2,bgcolor:"rgba(247,247,247,1)",mt:4 }}>
      
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography fontSize={20} fontWeight="bold">
         Best Sellers
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ cursor: "pointer" }}>View All</Typography>

          <IconButton onClick={() => scroll("left")}>
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>

          <IconButton onClick={() => scroll("right")}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Slider */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {bestSellersData.map((item) => (
          <SmartCard key={item.id} product={item} />
        ))}
      </Box>
    </Box>
  );
};

export default BestSellers;