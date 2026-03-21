import { Box, Typography, Button, IconButton, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "swiper/css";
import "swiper/css/pagination";
import { bannerData } from "../../constants/productService";

const ProductSlider = () => {
  const swiperRef = useRef();

  return (
    <>
    
    
    
    <Box sx={{ mt: 4, position: "relative" }}>
      {/* 🔥 Custom Left Arrow */}
      <IconButton
        onClick={() => swiperRef.current.slidePrev()}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          zIndex: 10,
          transform: "translateY(-50%)",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          "&:hover": { background: "#f5f5f5" },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      {/* 🔥 Custom Right Arrow */}
      <IconButton
        onClick={() => swiperRef.current.slideNext()}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          zIndex: 10,
          transform: "translateY(-50%)",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          "&:hover": { background: "#f5f5f5" },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

      {/* 🔄 Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              sx={{
                height: 450,
                borderRadius: "20px",
                background: "#eae6f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 5,
              }}
            >
              {/* Image */}
              <img src={item.img} width="100%" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

  
    </Box>



    <Stack mt={2}>
        <Typography fontWeight={"600"} fontSize={"14px"}>
          bigbasket – online grocery store
        </Typography>

        <Typography fontSize={"14px"} color="gray" mt={1}>
          Did you ever imagine that the freshest of fruits and vegetables,
          top-quality pulses and food grains, dairy products, and hundreds of
          branded items could be handpicked and delivered to your home, all at
          the click of a button? In today's fast-paced world, bigbasket.com,
          India's pioneering online grocery store, continues to bring a
          staggering array of over 40,000 products from more than 1,000 brands
          to the doorsteps of over 10 million satisfied customers. From
          essential household cleaning products to the latest beauty and makeup
          trends, bigbasket remains your one-stop shop for daily needs.
        </Typography>

        <Typography fontSize={"14px"} color="gray" mt={2}>
          In these times, we've eliminated the stress associated with shopping
          for daily essentials. You can now effortlessly order all your
          household products and groceries online. Plus, the added convenience
          of finding all your requirements at a single source, coupled with
          substantial savings, demonstrates that bigbasket, India's largest
          online supermarket, has transformed the way we shop for groceries.
          Online grocery shopping has become second nature. And when it comes to
          freshness, whether it's fruits and vegetables or dairy and meat, we've
          got you covered! Easily obtain fresh eggs, meat, fish, and more with
          just a few clicks.
        </Typography>

        <Typography fontSize={"14px"} color="gray" mt={2}>
          We now serve 300+ cities and towns across India and ensure swift
          delivery times, guaranteeing that all your groceries, snacks and
          branded foods reach you on time.
        </Typography>

        <Typography fontSize={"14px"} color="gray" mt={2}>
          Slotted Delivery: Choose the most convenient delivery slot to receive
          your groceries, ranging from early morning delivery for early birds to
          late-night delivery for those on the night shift. bigbasket caters to
          every schedule.
        </Typography>
        <Typography fontSize={"14px"} color="gray" mt={2}>
          Instant delivery from bbnow: In response to the ever-increasing demand
          for convenience, bbnow by bigbasket offers lightning-fast grocery
          delivery, ensuring that your essentials are at your doorstep within
          15-30 minutes. Our quick delivery service has revolutionized the way
          you shop for groceries. Choose from 5000+ grocery essentials. bbnow is
          available only in select cities.
        </Typography>
        <Typography fontSize={"14px"} color="gray" mt={2}>
          Whether it's a last-minute dinner party or you simply need something
          urgently, we've got you covered. This service exemplifies our
          commitment to providing you with not just the widest range of products
          but also the fastest and most efficient shopping experience, making
          bigbasket.com the go-to destination for all your immediate grocery
          needs.
        </Typography>
      </Stack>

    </>

  );
};

export default ProductSlider;
