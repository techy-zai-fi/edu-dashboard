import React from "react";
import { Box, Typography } from "@mui/material";

const getHeatmapColor = (value) => {
  if (value >= 75) return `rgba(56, 142, 60, ${(value - 75) / 25 + 0.3})`;
  if (value >= 50) return `rgba(255, 235, 59, ${(value - 50) / 25 + 0.3})`;
  return `rgba(244, 67, 54, ${(50 - value) / 50 + 0.3})`;
};

const HeatmapChart = ({ data }) => (
  <Box sx={{ display: "grid", gridTemplateColumns: `repeat(${data.length + 1}, 1fr)`, gap: "5px" }}>
    {/* First row: Top-left corner with "Test" and test numbers */}
    <Typography
      sx={{
        fontWeight: "bold",
        textAlign: "center",
        padding: "5px",
      }}
    >
      Test
    </Typography>
    {data.map((_, index) => (
      <Typography
        key={`test-header-${index}`}
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          padding: "5px",
        }}
      >
        {index + 1}
      </Typography>
    ))}

    {/* Render rows for each subject */}
    {["Physics", "Chemistry", "Biology"].map((subject, rowIndex) => (
      <React.Fragment key={`row-${rowIndex}`}>
        {/* First column with subject names */}
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

        {/* Heatmap cells for each test */}
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
                border: "1px solid #ddd",
              }}
            ></Box>
          );
        })}
      </React.Fragment>
    ))}
  </Box>
);

export default HeatmapChart;
