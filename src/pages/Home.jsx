import { Stack } from "@mui/material";
import SmartBasket from "../components/product/SmartBasket";
import ImageHeader from "../components/product/imageHeader";
import BestSellers from "../components/product/BestSellers";
import TopOffers from "../components/product/TopOffers";
import FruitsVegSection from "../components/product/FruitsVegSection";
import ProductSlider from "../components/product/ProductSlider";
import BeveragesSection from "../components/product/Beverages";

const Home = () => {
  return (
    <Stack width={{ xs: "100%", md: "78%" }} minHeight={"100vh"} marginX={"auto"} px={2}>
      <ImageHeader />
      <SmartBasket />
     <BestSellers/>
     <TopOffers/>
     <FruitsVegSection/>
     <BeveragesSection/>
     <ProductSlider/>
    </Stack>
  );
};

export default Home;
