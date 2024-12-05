import React from "react";
import { Box, Typography } from "@mui/material";

const TabContent = ({ content }) => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#ffffff",
        margin: "20px auto",
        maxWidth: "800px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "10px", color: "#333" }}>
        {content.title}
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: "1.6", color: "#555" }}>
        {content.body}
      </Typography>
    </Box>
  );
};

export default TabContent;
