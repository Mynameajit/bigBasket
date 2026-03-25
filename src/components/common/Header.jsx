import {
  Box,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Avatar,
  Stack,
} from "@mui/material";
import { MapPin, ChevronDown, Search } from "lucide-react";
import Categories from "./Categories";


const Header = () => {
  return (
    <Box
      sx={{
        width:"100%",
        background: "#0f5d52",
        color: "#fff",
        p: 1,
        pb: 2,
        position:"fixed",
        top:0,
        right:0,
        zIndex:100,
        px:{xs:1,md:15}
      }}
    >
      {/* Top Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{fontSize:"1rem"}} fontWeight="bold">
          bigbasket
        </Typography>

        <Avatar sx={{ height: 25, width: 25 }} />
        {/* <IconButton sx={{ border: "1px solid white", color: "white" }}>
          👤
        </IconButton> */}
      </Box>

      {/* Location */}
      <Box
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <MapPin size={11} />
            <Typography sx={{ fontSize: 11 }}>
              Deliver to Selected Location
            </Typography>
            <ChevronDown size={12} />
          </Box>

          <Typography sx={{ opacity: 0.8, fontSize: 10 }}>
            Location helps us show availability
          </Typography>
        </Box>

        <Stack>
          <Typography sx={{ opacity: 0.8, fontSize: 10, textAlign: "center" }}>
            Delivers in{" "}
          </Typography>

          <Box
            sx={{
              background: "#fff",
              color: "black",
              px: 0.5,
              py: 0.5,
              borderRadius: "8px",
              fontSize: "10px",
            }}
          >
            ⚡ 10 mins
          </Box>
        </Stack>
      </Box>

      {/* Search */}
      <TextField
        fullWidth
        placeholder="Search 18000+ products"
        variant="outlined"
        size="small"
        sx={{
          mt: 1,
          background: "#fff",
          borderRadius: "10px",
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: 32, // 🔥 height kam
            fontSize: "13px", // input text size
          },
          "& input::placeholder": {
            fontSize: "11px", // 🔥 placeholder size
            opacity: 0.8,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search size={16} color="gray" />
            </InputAdornment>
          ),
        }}
      />
      <Categories />

    </Box>
  );
};

export default Header;
