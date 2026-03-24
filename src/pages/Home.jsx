import { Box, Stack } from "@mui/material";
import Header from "../components/common/Header";
import HeroBanner from "./HeroBanner";
import TrendingSection from "./TrendingSection";
import ReorderSection from "./ReorderSection";
import CommonSlider from "../components/CommonSlider";
import { slider1Data, slider2Data } from "../data/sliderdata";
import TrendingCategory from "../components/TrendingCategory";
import electronic from "../assets/electronic.jpeg";


const Home = () => {
  return (
    <Stack sx={{pb:20,minHeight:"100vh"}}>
      <Header />

      <Stack sx={{paddingTop:"15rem"}}>
        <HeroBanner />
        <ReorderSection />
        <TrendingCategory />
        <CommonSlider data={slider1Data} height={180}/>
        <TrendingSection/>
        <CommonSlider data={slider2Data} height={180}/>
        
  {/* Image */}
      <Box
        component="img"
        src={electronic}
        sx={{
          width: "100%",
          // height: 90,
          // objectFit: "contain",
        }}
      />

      </Stack>
    </Stack>
  );
};

export default Home;
