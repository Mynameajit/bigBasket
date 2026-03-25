import {
  Box,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useState } from "react";
import { Facebook, Twitter, YouTube, Instagram } from "@mui/icons-material";

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Box sx={{ background: "#f5f5f5", mt: 3 }}>
      
      {/* Top Line */}
      <Box sx={{ textAlign: "center", py: 1, color: "gray", fontSize: 12 }}>
        - Thats all folks -
      </Box>

      {/* App Download */}
      <Box
        sx={{
          background: "#3e5f64",
          color: "#fff",
          textAlign: "center",
          py: 3,
        }}
      >
        <Typography fontSize={14}>
          Shopping at your Fingertips | Download the app
        </Typography>

        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            sx={{ height: 40 }}
          />
          <Box
            component="img"
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            sx={{ height: 40 }}
          />
        </Box>
      </Box>

      {/* Social */}
      <Box sx={{ textAlign: "center", py: 3 }}>
        <Typography fontWeight="bold">
          Get in touch with us
        </Typography>

        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton color="primary"><Facebook /></IconButton>
          <IconButton color="error"><YouTube /></IconButton>
          <IconButton color="secondary"><Instagram /></IconButton>
          <IconButton color="info"><Twitter /></IconButton>
        </Box>
      </Box>

      {/* Description */}
      <Box sx={{ px: 2 }}>
        <Typography fontWeight="bold" fontSize={14}>
          Online Grocery Shopping and Online Supermarket in India - bigbasket
        </Typography>

        <Typography fontSize={12} color="gray" mt={1}>
          bigbasket – online grocery store. Did you ever imagine that the freshest
          of fruits and vegetables, top quality pulses and food grains, dairy
          products, and hundreds of branded items could be delivered to your home
          with just a click? India's pioneering online grocery store, bigbasket.com,
          brings a whopping range of over 40,000 products from more than 1,000 brands
          to your doorstep.
        </Typography>

        {/* Expand Content */}
        <Collapse in={showMore}>
          <Typography fontSize={12} color="gray" mt={1}>
            From essential household cleaning products to the latest beauty and
            makeup trends, bigbasket remains your one-stop shop for daily grocery
            needs.
          </Typography>

          <Typography fontSize={12} color="gray" mt={1}>
            In these times, we've eliminated the stress associated with shopping
            for daily essentials. You can now effortlessly order all your household
            products and groceries online. Plus, the added convenience of finding
            all your requirements at a single source.
          </Typography>

          <Typography fontSize={12} color="gray" mt={1}>
            We now serve 300+ cities and towns across India and ensure swift
            delivery times, guaranteeing that all your groceries, snacks and
            branded foods reach you on time.
          </Typography>

          <Typography fontSize={12} color="gray" mt={1}>
            Whether it's a last-minute dinner party or you simply need something
            urgently, we've got you covered. This service exemplifies our commitment
            to providing you with not just the widest range of products but also the
            fastest and most efficient shopping experience.
          </Typography>
        </Collapse>

        {/* Toggle */}
        <Button
          onClick={() => setShowMore(!showMore)}
          size="small"
          endIcon={showMore ? <ExpandLess /> : <ExpandMore />}
          sx={{ textTransform: "none", color: "red", mt: 1 }}
        >
          {showMore ? "View Less" : "View More"}
        </Button>
      </Box>

      {/* Links */}
      <Box sx={{ px: 2, mt: 2 }}>
        <Typography fontWeight="bold">bigbasket</Typography>
        <Typography fontSize={12} color="gray">
          About Us | In News | Green bigbasket | Privacy Policy | Affiliate |
          Terms and Conditions | bb Daily
        </Typography>
      </Box>

      <Box sx={{ px: 2, mt: 2 }}>
        <Typography fontWeight="bold">Help</Typography>
        <Typography fontSize={12} color="gray">
          FAQs | Contact Us | bb Wallet FAQs | bb Wallet T&Cs | Vendor Connect
        </Typography>
      </Box>

      <Box sx={{ px: 2, mt: 2 }}>
        <Typography fontWeight="bold">Popular Brands</Typography>
        <Typography fontSize={12} color="gray">
          Amul | Nescafe | MTR | Red Bull | elite cake | Pediasure | Yummiez |
          Yera | Yakult | Britannia | Wow! Momo | Fortune | Haldiram's | Ferrero |
          Lay's | Patanjali | McCain | Kwality Walls | Cadbury Dairy Milk | Pedigree
        </Typography>
      </Box>

      <Box sx={{ px: 2, mt: 2, pb: 4 }}>
        <Typography fontWeight="bold">Popular Categories</Typography>
        <Typography fontSize={12} color="gray">
          Sunflower Oils | Wheat Atta | Ghee | Milk | Health Drinks | Flakes |
          Organic F&V | Namkeen | Eggs | Floor Cleaners | Other Juices | Diapers & Wipes
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;