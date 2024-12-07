import React from "react";
import { Tabs, Tab } from "@mui/material";

const SubjectTabs = ({ subjects, selected, onChange }) => (
  <Tabs value={selected} onChange={onChange} sx={{ mt: 4, mb: 2 }} textColor="primary" indicatorColor="primary">
    {subjects.map((subject) => (
      <Tab key={subject} label={subject} value={subject} />
    ))}
  </Tabs>
);

export default SubjectTabs;
