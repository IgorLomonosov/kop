import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabGroup from "./components/TabGroup";
import TabContent from "./components/TabContent";

function App() {
  return (
    <Router>
      <TabGroup />
      <Routes>
        <Route path="/tab1" element={<TabContent content="Content for Tab 1" />} />
        <Route path="/tab2" element={<TabContent content="Content for Tab 2" />} />
        <Route path="/tab3" element={<TabContent content="Content for Tab 3" />} />
        <Route path="*" element={<TabContent content="Select a tab" />} />
      </Routes>
    </Router>
  );
}

export default App;
