#!/bin/bash

# Root folder
ROOT="src/components"

# Create directory structure
echo "Creating directory structure..."
mkdir -p $ROOT/SWOTAnalysis
mkdir -p $ROOT/Recommendations
mkdir -p $ROOT/Heatmap
mkdir -p $ROOT/Tabs
mkdir -p $ROOT/Charts

# Create component files
echo "Creating component files..."

# SWOTCard.js
cat > $ROOT/SWOTAnalysis/SWOTCard.js << 'EOF'
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { FaCheckCircle, FaExclamationTriangle, FaBolt, FaLightbulb } from "react-icons/fa";

const SWOTCard = ({ type, data }) => {
  const typeColors = {
    strengths: { bg: "#e8f5e9", border: "#4caf50", icon: <FaCheckCircle style={{ color: "#4caf50" }} /> },
    weaknesses: { bg: "#fdecea", border: "#e57373", icon: <FaExclamationTriangle style={{ color: "#e57373" }} /> },
    opportunities: { bg: "#e3f2fd", border: "#1976d2", icon: <FaBolt style={{ color: "#1976d2" }} /> },
    threats: { bg: "#fff9c4", border: "#ffeb3b", icon: <FaLightbulb style={{ color: "#ffeb3b" }} /> },
  };

  return (
    <Card sx={{ background: typeColors[type].bg, borderLeft: `5px solid ${typeColors[type].border}` }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {type.charAt(0).toUpperCase() + type.slice(1)} {typeColors[type].icon}
        </Typography>
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SWOTCard;
EOF

# RecommendationsCard.js
cat > $ROOT/Recommendations/RecommendationsCard.js << 'EOF'
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { FaLightbulb } from "react-icons/fa";

const RecommendationsCard = ({ subject, recommendations }) => (
  <Card sx={{ mb: 4, background: "#fff9c4", borderLeft: "5px solid #ffc107" }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        <FaLightbulb color="yellow" style={{ marginRight: 8 }} />
        Study Recommendations: {subject}
      </Typography>
      <ul>
        {recommendations.map((rec, index) => (
          <Typography key={index} component="li">
            {rec}
          </Typography>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default RecommendationsCard;
EOF

# HeatmapChart.js
cat > $ROOT/Heatmap/HeatmapChart.js << 'EOF'
import React from "react";
import { Box, Typography } from "@mui/material";

const getHeatmapColor = (value) => {
  if (value >= 75) return `rgba(56, 142, 60, ${(value - 75) / 25 + 0.3})`;
  if (value >= 50) return `rgba(255, 235, 59, ${(value - 50) / 25 + 0.3})`;
  return `rgba(244, 67, 54, ${(50 - value) / 50 + 0.3})`;
};

const HeatmapChart = ({ data }) => (
  <Box sx={{ display: "grid", gridTemplateColumns: "repeat(26, 1fr)", gap: "5px" }}>
    <Box />
    {data.map((_, index) => (
      <Typography key={`test-header-${index}`} sx={{ textAlign: "center", fontWeight: "bold", padding: "5px" }}>
        Test {index + 1}
      </Typography>
    ))}
    {["Physics", "Chemistry", "Biology"].map((subject, rowIndex) => (
      <React.Fragment key={`row-${rowIndex}`}>
        <Typography
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px",
            textAlign: "center",
          }}
        >
          {subject}
        </Typography>
        {data.map((row, columnIndex) => {
          const value = row[subject];
          return (
            <Box
              key={`cell-${rowIndex}-${columnIndex}`}
              sx={{
                width: "35px",
                height: "35px",
                backgroundColor: getHeatmapColor(value),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: value >= 75 ? "#fff" : "#000",
                border: "1px solid #ddd",
              }}
            >
              {value}
            </Box>
          );
        })}
      </React.Fragment>
    ))}
  </Box>
);

export default HeatmapChart;
EOF

# SubjectTabs.js
cat > $ROOT/Tabs/SubjectTabs.js << 'EOF'
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
EOF

echo "All components created successfully!"
