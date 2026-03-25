import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const CommonSlider = ({ data = [], height = 160 }) => {
  return (
    <Box sx={{ px: 1, mt: 2 }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {data?.map((d, i) => (
          <SwiperSlide key={i}>
            <Box
              component="img"
              src={d.img}
              sx={{
                width: "100%",
                height,
                borderRadius: "16px",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CommonSlider;