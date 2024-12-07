import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Box, Typography } from "@mui/material";
import HeatmapBio from "../../components/Heatmap/HeatmapPhysics";

const physicsData = Array.from({ length: 25 }, (_, index) => ({
  "Mechanics": Math.floor(Math.random() * 100),
  "Thermodynamics": Math.floor(Math.random() * 100),
  "Electromagnetism": Math.floor(Math.random() * 100),
  "Optics": Math.floor(Math.random() * 100),
  "Modern Physics": Math.floor(Math.random() * 100),
  "Waves": Math.floor(Math.random() * 100),
  "Quantum Physics": Math.floor(Math.random() * 100),
}));

const physicsChapters = [
  "Mechanics",
  "Thermodynamics",
  "Electromagnetism",
  "Optics",
  "Modern Physics",
  "Waves",
  "Quantum Physics",
];

const Physics = () => {
  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#dee1e7" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: "260px", overflowY: "auto" }}>
        <Header />
        <div style={{ padding: "24px" }}>
          <Typography
            variant="h2"
            sx={{
              marginBottom: "16px",
              color: "#2D3748",
              fontWeight: "bold",
            }}
          >
            Chemistry
          </Typography>

          {/* Heatmap Section */}
          <Box
            sx={{
              padding: 3,
              backgroundColor: "#f5f7fa",
              borderRadius: "12px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                marginBottom: "16px",
                color: "#1976d2",
                fontWeight: "bold",
              }}
            >
              Chemistry Performance Heatmap
            </Typography>

            {/* Render Heatmap */}
            <HeatmapBio data={physicsData} chapters={physicsChapters} />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Physics;
