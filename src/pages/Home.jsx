import { Box, Stack } from "@mui/material";
import Header from "../components/common/Header";
import HeroBanner from "./HeroBanner";
import electronic from "../assets/electronic.jpeg";
import home2Img from "../assets/home2.jpeg";
import home3Img from "../assets/home3.jpeg";
import TrendingSection from "../components/TrendingSection";
import CommonSlider from "../components/common/CommonSlider";
import TrendingCategory from "../components/TrendingCategory";
import ReorderSection from "../components/ReorderSection";
import { slider1Data, slider2Data } from "../data/sliderdata";
import videoUrl from "../assets/video1.mp4";
import JustForYouSection from "../components/JustForYouSection";
import FreshHomeSection from "../components/FreshHomeSection";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <Stack sx={{ pb: 7, minHeight: "100vh" }}>
      <Header />

      <Stack sx={{ paddingTop: "15rem", px: { xs: 0, md: 15 } }}>
        <HeroBanner />
        <ReorderSection />
        <TrendingCategory />
        <CommonSlider data={slider1Data} height={{ xs: 190, md: 550 }} />
        <TrendingSection />
        <CommonSlider data={slider2Data} height={{ xs: 190, md: 550 }} />

        <ImgCard src={electronic} />
        <JustForYouSection />

        {/* video */}
        <Box
          component="video"
          autoPlay
          src={videoUrl}
          controls
          sx={{
            width: "100%",
            display: { xs: "flex", md: "none" },
          }}
        />
        <FreshHomeSection />
        <ImgCard src={home2Img} />
        <ImgCard src={home3Img} />


      </Stack>

      <Footer/>
    </Stack>
  );
};

const ImgCard = ({ hight = "100%", width = "100%", src }) => {
  return (
    <Box
      component="img"
      src={src}
      sx={{
        width: width,
        height: hight,
        display: { xs: "flex", md: "none" },
        borderRadius: "1rem",
        mt: 2,
      }}
    />
  );
};

export default Home;
