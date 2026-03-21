import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Badge,
  Stack,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SmartBasket from "../../assets/Smart_basket.webp";
import BBLogo, { IsScrollBBLogo } from "../../assets/BBLogo";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useState } from "react";
import LoginDialog from "../LoginDialog";

const Navbar = () => {
  const { isScrolled } = useScrollPosition(60);
  const [isOpen,setIsOpen]=useState(false)

  return (
    <Box
      sx={{
        width: "100%",
        position: isScrolled ? "sticky" : "relative",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#fff",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        pb: 2,
      }}
    >
      {/* 🟢 Top Thin Bar */}
      <Box sx={{ height: "2px", backgroundColor: "#84c225" }} />

      <Stack
        sx={{
          width: { xs: "100%", md: "80%" },
          marginX: "auto",
        }}
      >
        {/* 🔹 Main Navbar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 4,
            py:"5px",
            backgroundColor: "#fff",
            // borderBottom: "1px solid #e5e5e5",
          }}
        >
          {/* 🟢 Logo */}
          <Stack direction={"row"} gap={4}>

          {isScrolled ? <IsScrollBBLogo /> : <BBLogo />}

          <Button
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              display: isScrolled ? "flex" : "none",
              backgroundColor: "#5F9400",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: ".8rem",
              px: 1,
              "&:hover": { backgroundColor: "#6da51e" },
            }}
          >
            Shop by Category
          </Button>
          </Stack>

          {/* 🔍 Search */}
          <TextField
            placeholder="Search for Products..."
            size="small"
            sx={{
              width: isScrolled?"62%":"51%",
              backgroundColor: "#ffffff",

              // 🔥 Input text
              "& .MuiInputBase-input": {
                fontSize: "13px",
                padding: "10px",
              },

              // 🔥 Placeholder
              "& .MuiInputBase-input::placeholder": {
                fontSize: "12px",
                opacity: 0.7,
                color: "gray",
              },

              // 🔥 Default border
              "& .MuiOutlinedInput-root": {
                borderRadius: "6px",

                "& fieldset": {
                  borderColor: "#5E9400", // default
                },

                // 🔥 Hover
                "&:hover fieldset": {
                  borderColor: "#84c225",
                },

                // 🔥 Focus (important)
                "&.Mui-focused fieldset": {
                  borderColor: "#84c225",
                  borderWidth: "2px",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#84c225" }} />
                </InputAdornment>
              ),
            }}
          />

          {/* 📍 Delivery */}
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              px: 1,
              py: 0.5,
              borderRadius: "6px",
            }}
          >
            <Typography
              sx={{ fontSize: "11px", color: "#5F9400", fontWeight: "800" }}
            >
              ✔ Delivery in 10 mins
            </Typography>
            <Typography sx={{ fontSize: "11px", color: "#555" }}>
              Select Location
            </Typography>
          </Box>

          {/* 🔐 Login */}
          <Stack direction={"row"} gap={2} display={isScrolled ? "none" : "flex"}>
            <Button
            onClick={()=>setIsOpen(!isOpen)}
              variant="contained"
              sx={{
                backgroundColor: "#1a1a1a",
                textTransform: "none",
                fontSize: "0.7rem",
                px: 3,
                "&:hover": { backgroundColor: "#000" },
              }}
            >
              Login/ Sign Up
            </Button>

            {/* 🛒 Cart */}
            <IconButton>
              <Badge badgeContent={1} color="error">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Box>

        {/* 🔹 Bottom Category Bar */}
        <Box
          sx={{
            transition: "1s",
            display: isScrolled ? "none" : "flex",
            alignItems: "center",
            gap: 4,
            px: 4,
            py: 1,
            backgroundColor: "#fff",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* 🟢 Category Button */}
          <Button
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              backgroundColor: "#5F9400",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: ".8rem",
              px: 1,
              "&:hover": { backgroundColor: "#6da51e" },
            }}
          >
            Shop by Category
          </Button>

          {/* 🔹 Menu Items */}
          <Typography
            sx={{ cursor: "pointer", color: "#333", fontSize: ".82rem" }}
          >
            Exotic Fruits & Veggies
          </Typography>

          <Typography
            sx={{ cursor: "pointer", color: "#333", fontSize: ".82rem" }}
          >
            Tea
          </Typography>

          <Typography
            sx={{ cursor: "pointer", color: "#333", fontSize: ".82rem" }}
          >
            Ghee
          </Typography>

          <Typography
            sx={{ cursor: "pointer", color: "#333", fontSize: ".82rem" }}
          >
            Nandini
          </Typography>

          <Typography
            sx={{ cursor: "pointer", color: "#333", fontSize: ".82rem" }}
          >
            Fresh Vegetables »
          </Typography>
          <Stack pr={{ xs: 0, md: "6rem" }}>
            <img src={SmartBasket} alt="" />
          </Stack>
        </Box>
      </Stack>




      {
        isOpen &&(
          <LoginDialog open={isOpen} onClose={() => setIsOpen(false)} />
        )
      }
    </Box>
  );
};

export default Navbar;
