import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Box, Typography } from "@mui/material";

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

          {/* Content Area */}
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
              Biology Insights
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#64748B",
              }}
            >
              Welcome to the Biology page! Explore various insights and analysis
              related to the field of Biology. Charts and detailed information
              will be added here to give a comprehensive understanding of the
              subject.
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Biology;
