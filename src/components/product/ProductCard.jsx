import { useState } from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CheckIcon from "@mui/icons-material/Check";
import { BiDownArrow } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const SmartCard = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    product?.options ? product.options[0] : null,
  );
  console.log(product);

  return (
    <Box
      sx={{
        width: 270,
        border: "1px solid #eee",
        borderRadius: "12px",
        minHeight: "550px",
        px: 2,
        background: "#fff",
        position: "relative",
      }}
    >
      {/* 🔥 Discount */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          background: "#5c8c00",
          color: "#fff",
          px: 1,
          borderRadius: "4px",
          fontSize: "12px",
        }}
      >
        {selected?.discount || ""}% OFF
      </Box>

      {/* 🖼 Image */}
      <Box sx={{ textAlign: "center", py: 2 }}>
        <img src={product.image} width="210" />
      </Box>

      {/* ⚡ Delivery */}
      <Stack direction={"row"} width={"100%"} justifyContent={"end"}>
        <Stack
          width={"4rem"}
          sx={{
            fontSize: 11,
            color: "#665200",
            textAlign: "right",
            mt: 2,
            bgcolor: "#FFF5CC",
            p: "5px",
            display: "inline",
            borderRadius: "1rem",
          }}
        >
          ● {product.delivery}
        </Stack>
      </Stack>

      {/* Brand */}
      <Typography sx={{ fontSize: 12, color: "#888" }}>
        {product.brand}
      </Typography>

      {/* Name */}
      <Stack width={"100%"} height={"70px"}>
        <Typography sx={{ fontWeight: 500 }}>{product.name}</Typography>
      </Stack>

      {/* 🔽 Select Box */}
      {!product.options && (
        <Box
          onClick={() => setOpen(!open)}
          sx={{
            background:  "rgba(0,0,0,0.05)",
            color: "gray" ,
            px: 2,
            py: 1,
            borderRadius: "9px",
            cursor: "pointer",
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            my:1
          }}
        >
          {product.size}

        </Box>
      )}

      {product.options && (
        <Box sx={{ position: "relative", mt: 1 }}>
          {/* Top Selected */}
          <Box
            onClick={() => setOpen(!open)}
            sx={{
              background: open ? "#333" : "white",
              border: "1px solid gray",
              color: open ? "white" : "gray",
              px: 2,
              py: 1,
              borderRadius: "9px",
              cursor: "pointer",
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {selected.label}

            <IoIosArrowDown />
          </Box>

          {/* 🔥 Dropdown */}
          {open && (
            <Box
              sx={{
                position: "absolute",
                top: "45px",
                left: 0,
                width: "100%",
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                zIndex: 10,
                p: 1,
              }}
            >
              {product.options.map((opt, i) => {
                const isSelected = selected.label === opt.label;

                return (
                  <Box
                    key={i}
                    onClick={() => {
                      setSelected(opt);
                      setOpen(false);
                    }}
                    sx={{
                      border: isSelected
                        ? "1px solid #84c225"
                        : "1px solid transparent",
                      borderRadius: "8px",
                      p: 1,
                      mb: 1,
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                    }}
                  >
                    {/* Label */}
                    <Typography fontSize={13}>{opt.label}</Typography>

                    {/* Price Row */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography
                        sx={{
                          background: "#e8f5e9",
                          color: "#5c8c00",
                          px: 1,
                          borderRadius: "4px",
                          fontSize: 12,
                        }}
                      >
                        {opt.discount}% OFF
                      </Typography>

                      <Typography fontWeight="bold">₹{opt.price}</Typography>

                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          fontSize: 12,
                          color: "#888",
                        }}
                      >
                        ₹{opt.oldPrice}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 12,
                          background: "#f3e5ab",
                          px: 1,
                          borderRadius: "10px",
                        }}
                      >
                        ● 10 MINS
                      </Typography>

                      {isSelected && (
                        <CheckIcon
                          sx={{
                            marginLeft: "auto",
                            color: "#84c225",
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      )}
      {/* 💰 Price */}
      {product.options ? (
        <Typography sx={{ mt: 1, fontWeight: "bold" }}>
          ₹{selected.price}{" "}
          <span style={{ textDecoration: "line-through", color: "#888" }}>
            ₹{selected.oldPrice}
          </span>
        </Typography>
      ) : (
        <Typography sx={{ mt: 1, fontWeight: "bold" }}>
          ₹{product.price}{" "}
          <span style={{ textDecoration: "line-through", color: "#888" }}>
            ₹{product.oldPrice}
          </span>
        </Typography>
      )}

      {/* 🛒 Buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          mt: { xs: 2, md: 4 },
        }}
      >
        <IconButton sx={{ border: "1px solid #ddd" }}>
          <BookmarkBorderIcon />
        </IconButton>

        <Box
          sx={{
            width: "100%",
            height: "2.2rem",
            border: "1px solid red",
            fontSize: "1rem",
            borderRadius: "6px",
            color: "red",
            cursor: "pointer",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              background: "red",
              color: "#fff",
            },
          }}
        >
          Add
        </Box>
      </Box>
    </Box>
  );
};

export default SmartCard;
