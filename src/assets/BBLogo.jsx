import { Box, Typography } from "@mui/material";

const BBLogo = () => {
  return (
    <svg
      width="170"
      height="55"
      viewBox="0 0 220 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 🟢 Green square (slightly tighter look) */}
      <rect x="5" y="10" width="27" height="30" rx="8" fill="#84c225" />

      {/* 🔤 bb letters (offset for style) */}
      <text
        x="16"
        y="32"
        fontSize="23"
        fontWeight="500"
        fill="#000"
        fontFamily="Arial"
      >
        b
      </text>

      <text
        x="8"
        y="32"
        fontSize="23"
        fontWeight="500"
        fill="#e21b1b"
        fontFamily="Arial"
      >
        b
      </text>

      {/* 🔴 bigbasket */}
      <text
        x="32"
        y="30"
        fontSize="22"
        fontWeight="700"
        fill="#e21b1b"
        fontFamily="Arial"
      >
        big
      </text>

      <text
        x="70"
        y="30"
        fontSize="22"
        fontWeight="700"
        fill="#333"
        fontFamily="Arial"
      >
        basket
      </text>

      {/* 🔵 A TATA Enterprise (TATA bold using tspan) */}
      <text x="30" y="48" fontSize="11" fill="#0071ce" fontFamily="Arial">
        A <tspan fontWeight="900">TATA</tspan> Enterprise
      </text>
    </svg>
  );
};

export default BBLogo;



export const IsScrollBBLogo = () => {
  return (
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: "10px",
        backgroundColor: "#9ACD32",
        position: "relative",
        overflow: "hidden", // 🔥 important
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 🔴 First b */}
      <Typography
        sx={{
          position: "absolute",
          left: 5,
          top: 2,
          fontSize: 40, // 🔥 reduced size
          fontWeight: 700,
          color: "#e21b1b",
          lineHeight: 1,
          zIndex: 5,
        }}
      >
        b
      </Typography>

      {/* ⚫ Second b */}
      <Typography
        sx={{
          position: "absolute",
          left: 17,
          top: 2,
          fontSize: 40,
          fontWeight: 500,
          color: "#000",
          lineHeight: 1,
        }}
      >
        b
      </Typography>
    </Box>
  );
};
