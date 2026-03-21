import {
  Box,
  Typography,
  Dialog,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReplayIcon from "@mui/icons-material/Replay";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import CloseIcon from "@mui/icons-material/Close";

const LoginDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: "16px",
          overflow: "hidden",
        },
      }}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      }}
    >
      <Box sx={{ display: "flex", width:{xs:"100%",md: 600}, height: 350,position:"relative" }}>
        {/* ❌ Close */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 1, top: 1,zIndex:1000,color:"white" }}
        >
          <CloseIcon color="white"  />
        </IconButton>

        {/* 🔵 Left Section */}
        <Box
          sx={{
            width: "35%",
            background: "#f5f5f5",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* 🔥 Title */}
          <Typography fontWeight="500" fontSize={"12px"} color="gray">
            Why choose Bigbasket?
          </Typography>

          {/* 🔥 Icons Grid */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            {[
              { icon: <LocalOfferIcon fontSize="11px" />, label: "Quality" },
              { icon: <AccessTimeIcon fontSize="11px" />, label: "On time" },
              { icon: <LocalShippingIcon fontSize="11px"  />, label: "Return Policy" },
              { icon: <ReplayIcon fontSize="11px" />, label: "Free Delivery" },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  width: "48%",
                  textAlign: "center",
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    mb: 1,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography fontSize={12}>{item.label}</Typography>
              </Box>
            ))}
          </Box>

          {/* 🔹 Divider */}
          <Box
            sx={{
              height: "1px",
              background: "#ccc",
              my: 1,
            }}
          />

          {/* 🔹 Find us */}
          <Box>
            <Typography fontSize={12} mb={1}>
              Find us on
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  p: 1,
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  width="60"
                />
              </Box>

              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  p: 1,
                }}
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  width="60"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ⚫ Right Section */}
        <Box
          sx={{
            width: "65%",
            background: "#000",
            color: "#fff",
            p: 4,
          }}
        >
          <Typography fontSize={20} fontWeight="bold">
            Login/ Sign up
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              borderBottom: "2px solid orange",
              display: "inline-block",
              mb: 3,
            }}
          >
            Using OTP
          </Typography>

          {/* Input */}
          <TextField
            placeholder="Enter Phone number/ Email Id"
            fullWidth
            size="small"
            sx={{
              background: "#fff",
              borderRadius: "6px",
              mb: 3,
            }}
          />

          {/* Button */}
          <Button
          size="small"
            fullWidth
            sx={{
              background: "#7a0d0d",
              color: "#fff",
              py: 1.2,
              "&:hover": { background: "#5c0a0a" },
            }}
          >
            Continue
          </Button>

          {/* Terms */}
          <Typography sx={{ fontSize: 11, mt: 2, color: "#bbb" }}>
            By continuing, I accept TCP - bigbasket’s Terms and Conditions &
            Privacy Policy.
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
};

export default LoginDialog;
