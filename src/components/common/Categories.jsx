import { Box, Typography } from "@mui/material";
import { Apple, ShoppingBag, Headphones, Tag, Pill, Leaf } from "lucide-react";

const categories = [
  { name: "Fresh", icon: Apple },
  { name: "Grocery", icon: ShoppingBag },
  { name: "Electronics", icon: Headphones },
  { name: "Deals", icon: Tag },
  { name: "Pharmacy", icon: Pill },
  { name: "Organic", icon: Leaf },
];

const Categories = () => {
  return (
    <Box
      sx={{
        background: "#0f5d52",
        pt: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          overflowX: "auto",
          gap: 1,

          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome
          },
        }}
      >
        {categories.map((cat, i) => {
          const Icon = cat.icon;

          return (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: "50px",
                color: "#fff",
              }}
            >
              {/* Icon Circle */}
              <Box
                sx={{
                  background: "#1c6f63",
                  p: 1.5,
                  borderRadius: "50%",
                  mb: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={18} />
              </Box>

              {/* Text */}
              <Typography variant="caption" align="center">
                {cat.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Categories;
