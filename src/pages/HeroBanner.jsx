import { Box } from "@mui/material";
import heroImg from "../assets/heroImg.jpeg";

const HeroBanner = () => {
  return (
    <Box sx={{ p: 1, pt: 1 }}>
      <Box
        sx={{
          width: "100%",
          // height: 160,
          borderRadius: "16px",
          overflow: "hidden",
          // boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={heroImg}
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroBanner;