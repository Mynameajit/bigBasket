import { Box } from "@mui/material";
import heroImg from "../assets/heroImg.jpeg";

const HeroBanner = () => {
  return (
    <Box sx={{ p: 1, pt: 1 }}>
      <Box
        sx={{
          display:{xs:"flex",md:"none"},
          width: "100%",
          // height: 160,
          borderRadius: "16px",
          overflow: "hidden",
          // boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          component="img"
          src={heroImg}
          alt="banner"
          sx={{
            width: "100%",
            height: { xs: "100%", md: 400 },
            objectFit: {xs:"cover",md:"fill"},
            borderRadius: "10px",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroBanner;
