import React from "react";
import { Box } from "@mui/material";

const TabContent = ({ content }) => (
  <Box sx={{ padding: 2 }}>
    <h1>{content}</h1>
  </Box>
);

export default TabContent;
