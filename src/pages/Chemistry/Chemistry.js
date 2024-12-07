import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Box, Typography } from "@mui/material";
import HeatmapBio from "../../components/Heatmap/HeatmapChemistry";

const chemistryData = Array.from({ length: 25 }, (_, index) => ({
  "Atomic Structure": Math.floor(Math.random() * 100),
  "Periodic Table": Math.floor(Math.random() * 100),
  "Chemical Bonding": Math.floor(Math.random() * 100),
  "Thermodynamics": Math.floor(Math.random() * 100),
  "Chemical Kinetics": Math.floor(Math.random() * 100),
  "Organic Chemistry": Math.floor(Math.random() * 100),
  "Inorganic Chemistry": Math.floor(Math.random() * 100),
}));

const chemistryChapters = [
  "Atomic Structure",
  "Periodic Table",
  "Chemical Bonding",
  "Thermodynamics",
  "Chemical Kinetics",
  "Organic Chemistry",
  "Inorganic Chemistry",
];


const Chemistry = () => {
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
            <HeatmapBio data={chemistryData} chapters={chemistryChapters} />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Chemistry;
