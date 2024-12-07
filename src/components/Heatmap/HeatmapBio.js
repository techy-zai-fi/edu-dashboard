import React from "react";
import { Box, Typography } from "@mui/material";

// Function to generate a single color with varying intensity
const getHeatmapColor = (value) => {
  const intensity = value / 100; // Normalize the value to a range of 0-1
  return `rgba(56, 142, 60, ${0.3 + intensity * 0.7})`; // Green color with varying alpha
};

const HeatmapBio = ({ data, chapters }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: `repeat(${data.length + 1}, 1fr)`,
      gap: "5px",
    }}
  >
    {/* X-axis labels (Tests) */}
    <Typography
      sx={{
        fontWeight: "bold",
        textAlign: "center",
        padding: "5px",
      }}
    >
      Chapter
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

    {/* Y-axis labels (Chapters) and heatmap cells */}
    {chapters.map((chapter, rowIndex) => (
      <React.Fragment key={`row-${rowIndex}`}>
        {/* Y-axis chapter names */}
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
          {chapter}
        </Typography>

        {/* Heatmap cells */}
        {data.map((row, columnIndex) => {
          const value = row[chapter] || 0; // Default value if no data
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

export default HeatmapBio;
