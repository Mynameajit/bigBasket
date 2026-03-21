import React from "react";
import egs from "../../assets/eggs.webp";
import newspass from "../../assets/newspass.webp";
import ayurveda from "../../assets/ayurveda.webp";
import buyMore from "../../assets/buyMore.webp";
import deals from "../../assets/deals.webp";
import combo from "../../assets/combo.webp";
import { Stack } from "@mui/material";

const ImageHeader = () => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      alignItems={"center"}
      gap={2}
      justifyContent={"space-between"}
      marginTop={"4rem"}
    >
      <Stack width={{ xs: "100%", md: "15rem" }} sx={{ cursor: "pointer" }}>
        <img width={"100%"} src={egs} alt="" />
      </Stack>

      <Stack width={{ xs: "100%", md: "15rem" }} sx={{ cursor: "pointer" }}>
        <img width={"100%"} src={newspass} alt="" />
      </Stack>
      <Stack width={{ xs: "100%", md: "15rem" }} sx={{ cursor: "pointer" }}>
        <img width={"100%"} src={ayurveda} alt="" />
      </Stack>
      <Stack width={{ xs: "100%", md: "15rem" }} sx={{ cursor: "pointer" }}>
        <img width={"100%"} src={buyMore} alt="" />
      </Stack>
      <Stack width={{ xs: "100%", md: "15rem" }} sx={{ cursor: "pointer" }}>
        <img width={"100%"} src={deals} alt="" />
      </Stack>
      <Stack width={{ xs: "100%", md: "15rem" }} sx={{ cursor: "pointer" }}>
        <img width={"100%"} src={combo} alt="" />
      </Stack>
    </Stack>
  );
};

export default ImageHeader;
