import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const TabGroup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "Tab 1", path: "/tab1" },
    { label: "Tab 2", path: "/tab2" },
    { label: "Tab 3", path: "/tab3" },
  ];

  const currentTabIndex = tabs.findIndex((tab) => tab.path === location.pathname);

  const handleChange = (event, newValue) => {
    navigate(tabs[newValue].path);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Tabs value={currentTabIndex} onChange={handleChange}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabGroup;
