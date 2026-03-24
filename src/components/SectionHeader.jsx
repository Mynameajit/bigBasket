import { Box, Typography } from "@mui/material";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <Box sx={{ px: 2, mt: 2 }}>
      <Typography fontWeight="bold" fontSize={18}>
        {title}
      </Typography>
      {subtitle && (
        <Typography fontSize={13} color="green">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;