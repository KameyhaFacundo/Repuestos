import { Box, Typography } from "@mui/material";
import { brand } from "../../../theme/theme";

function SectionHeading({ title, subtitle, light = false, sx }) {
  return (
    <Box sx={{ maxWidth: 520, ...sx }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.4rem", md: "3.4rem" },
          color: light ? "#ffffff" : brand.heading,
        }}
      >
        {title}
      </Typography>
      <Box sx={{ width: 48, height: 2, backgroundColor: brand.gold, my: 3 }} />
      {subtitle && (
        <Typography
          sx={{
            color: light ? "rgba(255,255,255,0.74)" : brand.muted,
            fontSize: "1.05rem",
            lineHeight: 1.75,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default SectionHeading;
