import { Box, Typography, Tabs, Tab, Button } from "@mui/material";
import ProductCard from "../components/ProductCard";
import t1 from "../assets/trending/t1.jpeg";
import t2 from "../assets/trending/t2.jpeg";
import t3 from "../assets/trending/t3.jpeg";



export const products = [
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
const ReorderSection = () => {
  return (
    <Box sx={{ mt: 2,px:2 }}>
      {/* Title */}
      <Box >
        <Typography fontWeight="bold" fontSize={18}>
          REORDER & SAVE
        </Typography>
      </Box>

      {/* Tabs */}
      <Tabs value={0} >
        <Tab label="Order again" sx={{textTransform:"none"}}/>
        <Tab label="Best prices" sx={{textTransform:"none"}}/>
      </Tabs>

      {/* Products */}
   <Box
  sx={{
    display: "flex",
    gap: 2,
    overflowX: "auto",
    py: 2,

    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
  }}
>
  {products.map((item) => (
    <ProductCard key={item.id} item={item} />
  ))}
</Box>

      <Button
      size="small"
      sx={{
        color:"#0f5d52",
        border:"1px solid gray",
        borderRadius:"10px",
        textTransform:"none",
        textAlign:"center",
        width:"100%"
      }}
      >View more products</Button>
    </Box>
  );
};

export default ReorderSection;