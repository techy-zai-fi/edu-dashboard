import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Box, Typography } from "@mui/material";
import HeatmapBio from "../../components/Heatmap/HeatmapBio";

const biologyData = Array.from({ length: 25 }, (_, index) => ({
  "Cell Structure": Math.floor(Math.random() * 100),
  "Genetics": Math.floor(Math.random() * 100),
  "Evolution": Math.floor(Math.random() * 100),
  "Ecosystems": Math.floor(Math.random() * 100),
  "Plant Biology": Math.floor(Math.random() * 100),
  "Animal Biology": Math.floor(Math.random() * 100),
  "Human Anatomy": Math.floor(Math.random() * 100),
}));

const biologyChapters = [
  "Cell Structure",
  "Genetics",
  "Evolution",
  "Ecosystems",
  "Plant Biology",
  "Animal Biology",
  "Human Anatomy",
];

const Biology = () => {
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
            Biology
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
              Biology Performance Heatmap
            </Typography>

            {/* Render Heatmap */}
            <HeatmapBio data={biologyData} chapters={biologyChapters} />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Biology;
