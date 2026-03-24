import { Box, Typography } from "@mui/material";
import { trendingData } from "../data/trendingData";


const TrendingCategory = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ px: 2 }}>
        <Typography fontWeight="bold">Trending this week</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          overflowX: "auto",
          px: 2,
          py: 1,

          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {trendingData?.map((item, i) => (
          <Box
            key={i}
            component="img"
            src={item.img}
            alt={`trending-${i}`}
            sx={{
              height: 150,
              width: 110,
              objectFit: "cover",
              borderRadius: "12px",
              flexShrink: 0, 
              cursor: "pointer",
              bgcolor:"rgba(0,0,0,0.1)"
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TrendingCategory;
