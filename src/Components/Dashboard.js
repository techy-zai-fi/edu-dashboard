import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { FaCheckCircle, FaExclamationTriangle, FaLightbulb, FaBolt } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Predefined Data
const kpiData = {
  overallPerformance: 88,
  topSubject: "Biology",
  topSubjectSymbol: "🧬",
  lowestSubject: "Physics",
  lowestSubjectSymbol: "🔬",
};

const swotData = {
  Physics: {
    strengths: ["Strong Mechanics foundation", "Accurate problem-solving skills", "Quick in calculations"],
    weaknesses: ["Struggles with time management", "Weak in Thermodynamics"],
    opportunities: ["Master advanced Mechanics topics", "Participate in Physics Olympiads"],
    threats: ["Inconsistent scores under time pressure", "Competition from peers in core subjects"],
  },
  Chemistry: {
    strengths: ["Strong grasp of Periodic Table trends", "High accuracy in Organic Chemistry"],
    weaknesses: ["Weak practical skills", "Confusion in reaction mechanisms"],
    opportunities: ["Focus on lab experiments", "Participate in Chemistry workshops"],
    threats: ["Low confidence in competitive exams", "Over-reliance on theoretical learning"],
  },
  Biology: {
    strengths: ["Excellent knowledge of Genetics", "High diagram accuracy", "Quick understanding of Ecology"],
    weaknesses: ["Weak in Plant Physiology", "Tends to skip Anatomy"],
    opportunities: ["Focus on detailed Anatomy studies", "Leverage Genetics for research projects"],
    threats: ["Dependency on rote learning", "Difficulties in handling large syllabus"],
  },
};

const recommendations = {
  Physics: ["Dedicate 30 minutes daily to Mechanics.", "Practice timed Thermodynamics problems.", "Review Newton's Laws weekly."],
  Chemistry: ["Revise Periodic Trends weekly.", "Focus on reaction mechanisms.", "Improve confidence in practical problem-solving."],
  Biology: ["Revise Genetics weekly.", "Focus on diagram-based questions.", "Master Plant Physiology concepts."],
};

const testTrendData = Array.from({ length: 25 }, (_, index) => ({
  test: `Test ${index + 1}`,
  Physics: 10 + index, // Simulated data trend
  Chemistry: 10 + Math.min(index, 20),
  Biology: 70 + Math.max(index - 5, 0),
  Overall: (50 + index + (60 + Math.min(index, 20)) + (70 + Math.max(index - 5, 0))) / 3,
}));

const heatmapData = Array.from({ length: 25 }, (_, index) => ({
  test: `Test ${index + 1}`,
  Physics: index % 5 === 0 ? 40 : index % 5 === 1 ? 55 : index % 5 === 2 ? 65 : index % 5 === 3 ? 80 : 90,
  Chemistry: index % 4 === 0 ? 45 : index % 4 === 1 ? 60 : index % 4 === 2 ? 75 : 85,
  Biology: index % 6 === 0 ? 35 : index % 6 === 1 ? 50 : index % 6 === 2 ? 70 : index % 6 === 3 ? 65 : index % 6 === 4 ? 85 : 95,
}));


// Helper Function for Heatmap Color
const getHeatmapColor = (value) => {
  if (value >= 75) return `rgba(56, 142, 60, ${(value - 75) / 25 + 0.3})`; // Dark to Light Green
  if (value >= 50) return `rgba(255, 235, 59, ${(value - 50) / 25 + 0.3})`; // Dark to Light Yellow
  return `rgba(244, 67, 54, ${(50 - value) / 50 + 0.3})`; // Dark to Light Red
};

const Dashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState("Physics");

  // Tab Change Handler
  const handleTabChange = (event, newValue) => {
    setSelectedSubject(newValue);
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Header */}
      <Typography variant="h4" sx={{ textAlign: "center", mb: 4, color: "#1976d2", fontWeight: "bold" }}>
        AI-Powered Student Dashboard
      </Typography>

      {/* KPI Widgets */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Top Subject */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", borderLeft: "5px solid #4caf50" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6">Top Subject</Typography>
              <Typography variant="h5" sx={{ mt: 1, color: "#4caf50" }}>
                {kpiData.topSubject} {kpiData.topSubjectSymbol}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Lowest Subject */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ background: "linear-gradient(135deg, #fdecea, #f8bbd0)", borderLeft: "5px solid #e57373" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6">Lowest Subject</Typography>
              <Typography variant="h5" sx={{ mt: 1, color: "#e57373" }}>
                {kpiData.lowestSubject} {kpiData.lowestSubjectSymbol}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Subject Selector Tabs */}
      <Tabs value={selectedSubject} onChange={handleTabChange} sx={{ mt: 4, mb: 2 }} textColor="primary" indicatorColor="primary">
        {Object.keys(swotData).map((subject) => (
          <Tab key={subject} label={subject} value={subject} />
        ))}
      </Tabs>

      {/* SWOT Analysis */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {["strengths", "weaknesses", "opportunities", "threats"].map((type) => (
          <Grid item xs={12} sm={6} key={type}>
            <Card
              className={`swot-card ${type}`}
              sx={{
                background: type === "strengths" ? "#e8f5e9" : type === "weaknesses" ? "#fdecea" : type === "opportunities" ? "#e3f2fd" : "#fff9c4",
                borderLeft: `5px solid ${type === "strengths" ? "#4caf50" : type === "weaknesses" ? "#e57373" : type === "opportunities" ? "#1976d2" : "#ffeb3b"}`,
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
                  {type === "strengths" && <FaCheckCircle style={{ color: "#4caf50", marginLeft: 5 }} />}
                  {type === "weaknesses" && <FaExclamationTriangle style={{ color: "#e57373", marginLeft: 5 }} />}
                  {type === "opportunities" && <FaBolt style={{ color: "#1976d2", marginLeft: 5 }} />}
                  {type === "threats" && <FaLightbulb style={{ color: "#ffeb3b", marginLeft: 5 }} />}
                </Typography>
                <ul>
                  {swotData[selectedSubject][type].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Study Recommendations */}
      <Card sx={{ mb: 4, background: "#fff9c4", borderLeft: "5px solid #ffc107" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            <FaLightbulb color="yellow" style={{ marginRight: 8 }} />
            Study Recommendations: {selectedSubject}
          </Typography>
          <ul>
            {recommendations[selectedSubject].map((rec, index) => (
              <Typography key={index} component="li">
                {rec}
              </Typography>
            ))}
          </ul>
        </CardContent>
      </Card>

     <Card sx={{ mb: 4 }}>
  <CardContent>
    <Typography variant="h6" gutterBottom>
      Combined Heatmap: Physics, Chemistry, Biology
    </Typography>
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(26, 1fr)", gap: "5px" }}>
      {/* Y-Axis Header (Subjects) */}
      <Box />
      {heatmapData.map((_, index) => (
        <Typography
          key={`test-header-${index}`}
          sx={{ textAlign: "center", fontWeight: "bold", padding: "5px" }}
        >
          Test {index + 1}
        </Typography>
      ))}
      {/* Rows for Subjects */}
      {["Physics", "Chemistry", "Biology"].map((subject, rowIndex) => (
        <React.Fragment key={`row-${rowIndex}`}>
          {/* Y-Axis Labels */}
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
          {/* Heatmap Cells */}
          {heatmapData.map((row, columnIndex) => {
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
                  color: value >= 75 ? "#fff" : "#000", // High marks with white text for better contrast
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
  </CardContent>
</Card>

    </Box>
  );
};

export default Dashboard;
