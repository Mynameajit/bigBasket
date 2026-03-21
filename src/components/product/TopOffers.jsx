import { Box, Typography } from "@mui/material";

export const topOffersData = [
  {
    id: 1,
    titleTop: "DEALS OF",
    titleBottom: "THE WEEK",
  },
  {
    id: 2,
    titleTop: "BIG PACK",
    titleBottom: "BIGGER DISCOUNTS",
  },
  {
    id: 3,
    titleTop: "COMBOS",
    titleBottom: "YOU CAN'T MISS",
  },
  {
    id: 4,
    titleTop: "THE",
    titleBottom: "₹30 CORNER",
  },
];

const TopOffers = () => {
  return (
    <Box sx={{ py: 3 }}>
      
      {/* 🔥 Title */}
      <Typography fontSize={22} fontWeight="bold" mb={2}>
        Top Offers
      </Typography>

      {/* 🧩 Cards */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {topOffersData.map((item) => (
          <OfferCard key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default TopOffers;



const OfferCard = ({ item }) => {
  return (
    <Box
      sx={{
        width: 265,
        height: 200,
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        cursor: "pointer",
      }}
    >
      {/* 🔴 Top Red */}
      <Box
        sx={{
          background: "#e11b22",
          color: "#fff",
          px: 2,
          py: 5,
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        {item.titleTop}
      </Box>

      {/* ⚪ Bottom */}
      <Box
        sx={{
          px: 2,
          py: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#111",
            mb: 2,
          }}
        >
          {item.titleBottom}
        </Typography>

        <Typography sx={{ fontSize: "13px", color: "#555" }}>
          View offers &gt;
        </Typography>
      </Box>
    </Box>
  );
};
