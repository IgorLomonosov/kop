import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const TabGroup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/info" },
    { label: "Contact", path: "/contact" },
  ];

  const currentTabIndex = tabs.findIndex((tab) => tab.path === location.pathname);

  const handleChange = (event, newValue) => {
    navigate(tabs[newValue].path);
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "10px 0", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      <Tabs
        value={currentTabIndex}
        onChange={handleChange}
        centered
        TabIndicatorProps={{
          style: { backgroundColor: "#1976d2", height: "3px" },
        }}
        sx={{
          "& .MuiTab-root": {
            fontSize: "1rem",
            fontWeight: 500,
            textTransform: "none",
            minWidth: "120px",
          },
          "& .Mui-selected": {
            color: "#1976d2",
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabGroup;
