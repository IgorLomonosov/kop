import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabGroup from "./components/TabGroup";
import TabContent from "./components/TabContent";

function App() {
  const tabContents = {
    home: { title: "Welcome to Home", body: "This is the home tab. Enjoy your stay!" },
    info: { title: "About Us", body: "Learn more about us and what we do." },
    contact: { title: "Contact", body: "Get in touch with us through this tab." },
    default: { title: "Welcome!", body: "Please select a tab to see more content." },
  };

  return (
    <Router>
      <TabGroup />
      <Routes>
        <Route path="/home" element={<TabContent content={tabContents.home} />} />
        <Route path="/info" element={<TabContent content={tabContents.info} />} />
        <Route path="/contact" element={<TabContent content={tabContents.contact} />} />
        <Route path="*" element={<TabContent content={tabContents.default} />} />
      </Routes>
    </Router>
  );
}

export default App;
