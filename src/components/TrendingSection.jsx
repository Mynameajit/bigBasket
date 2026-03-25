import { Box, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import t1 from "../assets/trending/t1.jpeg";
import t2 from "../assets/trending/t2.jpeg";
import t3 from "../assets/trending/t3.jpeg";


export const trending = [
  {
    id: 1,
    name: "fresho! - Capsicum - Green",
    weight: "1 kg",
    price: 123.2,
    originalPrice: 154,
    discount: "20% OFF",
    image: t1,
  },
  {
    id: 2,
    name: "fresho! - Carrot - Orange",
    weight: "1 kg",
    price: 28,
    originalPrice: 89,
    discount: "69% OFF",
    image: t2,
  },
  {
    id: 3,
    name: "fresho! - Cauliflower",
    weight: "1 pc",
    price: 10,
    originalPrice: 65.75,
    discount: "85% OFF",
    image: t3,
  },
];

const TrendingSection = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ px: 2 }}>
        <Typography fontWeight="bold">
          Trending near you
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          pb: 2,
        }}
      >
        {trending.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default TrendingSection;