import { Box, Typography, IconButton } from "@mui/material";
import { Add, KeyboardArrowDown } from "@mui/icons-material";

const ProductCard = ({ item }) => {
  return (
    <Box
      sx={{
  flexShrink: 0, // 🔥 MOST IMPORTANT

        width: 160,
        borderRadius: "16px",
        background: "#fff",
        p: 1.5,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        position: "relative",
      }}
    >
      {/* Discount Badge */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          background: "#2e7d32",
          color: "#fff",
          fontSize: 11,
          px: 1,
          py: 0.3,
          borderRadius: "6px",
          fontWeight: "bold",
        }}
      >
        {item.discount}
      </Box>

      {/* Image */}
      <Box
        component="img"
        src={item.image}
        alt={item.name}
        sx={{
          width: "100%",
          height: 100,
          objectFit: "contain",
          borderRadius: "10px",
        }}
      />

      {/* + Button */}
      <IconButton
        sx={{
          position: "absolute",
          right: 12,
          top: 90,
          background: "#2e7d32",
          color: "#fff",
          "&:hover": { background: "#1b5e20" },
          width: 36,
          height: 36,
        }}
      >
        <Add />
      </IconButton>

      {/* Delivery */}
      <Box
        sx={{
          mt: 1,
          display: "inline-flex",
          alignItems: "center",
          background: "#f1f8f4",
          px: 1,
          py: 0.3,
          borderRadius: "8px",
          fontSize: 11,
        }}
      >
        ⚡ 10 mins
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontSize: 13,
          mt: 1,
          fontWeight: 500,
          lineHeight: 1.3,
        }}
      >
        {item.name}
      </Typography>

      {/* Weight */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
        <Typography fontSize={12} color="gray">
          {item.weight}
        </Typography>
        <KeyboardArrowDown fontSize="small" />
      </Box>

      {/* Price */}
      <Box sx={{ mt: 0.5 }}>
        <Typography fontSize={14} fontWeight="bold">
          ₹{item.price}
          <Typography
            component="span"
            sx={{
              fontSize: 12,
              color: "gray",
              textDecoration: "line-through",
              ml: 1,
            }}
          >
            ₹{item.originalPrice}
          </Typography>
        </Typography>
      </Box>

      {/* Bottom Tag */}
      <Box
        sx={{
          mt: 1,
          background: "#e8f5e9",
          textAlign: "center",
          py: 0.5,
          borderRadius: "8px",
          fontSize: 12,
          color: "#2e7d32",
          fontWeight: 500,
        }}
      >
        Har Din Sasta!
      </Box>
    </Box>
  );
};

export default ProductCard;