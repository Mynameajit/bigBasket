import { Box, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "../../data/navData";

const BottomNav = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#fff",
        borderTop: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "space-around",
        py: 1,
        zIndex: 1000,
      }}
    >
      {navItems.map((item, i) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <NavLink
            key={i}
            to={item.path}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: isActive ? "#2e7d32" : "#777",
              }}
            >
              <Icon size={22} />
              <Typography variant="caption">
                {item.name}
              </Typography>
            </Box>
          </NavLink>
        );
      })}
    </Box>
  );
};

export default BottomNav;