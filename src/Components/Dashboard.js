import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Tooltip,
  IconButton,
  useTheme,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#ff9800",
      },
      background: {
        default: "#dde6ee",
      },
    },
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif",
    },
  });

  const testData = [
    { subject: "Physics", accuracy: 68, improvementPercentage: 12 },
    { subject: "Chemistry", accuracy: 80, improvementPercentage: 15 },
    { subject: "Biology", accuracy: 87, improvementPercentage: 20 },
  ];

  const swotData = {
    strengths: "High accuracy in Biology (87% in Genetics and Ecology).",
    weaknesses: "Time management in Physics (Mechanics).",
    opportunities: "Inorganic Chemistry improvement (72% → 80%).",
    threats: "Inconsistent performance in time-constrained Mechanics questions.",
  };

  const recommendations = [
    { action: "Dedicate 30 minutes daily to Inorganic Chemistry as you consistently score below 70% in 'Periodic Table Trends' across 10 tests." },
    { action: "Practice timed Mechanics problems as you take an average of 4.5 minutes on 'Newton's Laws of Motion' questions, exceeding the recommended 2 minutes." },
    { action: "Revise Genetics weekly to maintain performance; you consistently make errors in Punnett square questions involving 'dihybrid crosses'." },
    { action: "Review your approach to Thermodynamics problems; you repeatedly confuse equations for 'Work done by the system' and 'Work done on the system' in 15 of 20 tests." },
  ];

  const trendData = [
    { test: 'Test 1', Physics: 60, Chemistry: 70, Biology: 85 },
    { test: 'Test 2', Physics: 62, Chemistry: 72, Biology: 87 },
    { test: 'Test 3', Physics: 58, Chemistry: 75, Biology: 88 },
    { test: 'Test 4', Physics: 65, Chemistry: 77, Biology: 89 },
    { test: 'Test 5', Physics: 63, Chemistry: 78, Biology: 90 },
    { test: 'Test 6', Physics: 66, Chemistry: 80, Biology: 92 },
    { test: 'Test 7', Physics: 67, Chemistry: 82, Biology: 91 },
    { test: 'Test 8', Physics: 64, Chemistry: 79, Biology: 93 },
    { test: 'Test 9', Physics: 68, Chemistry: 81, Biology: 94 },
    { test: 'Test 10', Physics: 70, Chemistry: 83, Biology: 95 },
  ];

  const topicPerformanceData = [
    { topic: "Mechanics", test1: 55, test2: 60, test3: 58, test4: 62, test5: 63 },
    { topic: "Optics", test1: 70, test2: 67, test3: 72, test4: 75, test5: 73 },
    { topic: "Inorganic", test1: 68, test2: 72, test3: 75, test4: 78, test5: 80 },
    { topic: "Organic", test1: 70, test2: 73, test3: 77, test4: 80, test5: 82 },
    { topic: "Genetics", test1: 85, test2: 87, test3: 89, test4: 92, test5: 94 },
    { topic: "Ecology", test1: 88, test2: 90, test3: 92, test4: 94, test5: 95 },
  ];

  const generateHeatmapCellStyle = (value) => ({
    textAlign: "center",
    padding: "10px",
    backgroundColor: value
      ? `rgba(33, 150, 243, ${value / 100})` // Dynamically set based on the value (scaled 0-100)
      : "#f5f5f5", // Default light gray for missing values
    color: value > 50 ? "#fff" : "#000", // High values get white text for better contrast
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 3, backgroundColor: theme.palette.background.default }}>
        {/* Header */}
        <Box sx={{ position: "relative", mb: 3 }}>
          {/* Logo */}
          <Box
            component="img"
            src="./undefined.png"
            alt="Logo"
            sx={{
              width: 80,
              height: 50,
              borderRadius: "10%",
              position: "absolute", // Allows the logo to stay in its own space
              left: 0, // Keeps the logo aligned to the left
            }}
          />

          {/* Centered Title */}
          <Typography
            variant="h4"
            component="h1"
            sx={{
              textAlign: "center", // Ensures the title is centered
            }}
          >
            AI-Powered Insight Dashboard
          </Typography>
        </Box>



        <Grid container spacing={3}>
          {/* KPI Overview */}
          <Grid item xs={12} md={4}>
            <Card
            sx={{
              backgroundColor: "#ede7f7", // Light red
              color: "#000000", // Dark red for text
            }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  KPI Overview
                </Typography>
                <Typography variant="body1">
                  <strong>Top Subject:</strong> Biology
                </Typography>
                <Typography variant="body1">
                  <strong>Weakest Subject:</strong> Physics
                </Typography>
                <Typography variant="body1">
                  <strong>Overall Improvement:</strong> 20%
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* SWOT Analysis */}
          <Grid item xs={12} md={8}>
            <Card
            sx={{
              backgroundColor: "#eaf7e7", // Light red
              color: "#000000", // Dark red for text
            }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  SWOT Analysis
                </Typography>
                <Typography variant="body1">
                  <strong>Strengths:</strong> {swotData.strengths}
                </Typography>
                <Typography variant="body1">
                  <strong>Weaknesses:</strong> {swotData.weaknesses}
                </Typography>
                <Typography variant="body1">
                  <strong>Opportunities:</strong> {swotData.opportunities}
                </Typography>
                <Typography variant="body1">
                  <strong>Threats:</strong> {swotData.threats}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Recommendations */}
          <Grid item xs={12}>
            <Card
            sx={{
              backgroundColor: "#faf7e8", // Light red
              color: "#000000", // Dark red for text
            }}
            >
            
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recommendations
                </Typography>
                <ul>
                  {recommendations.map((rec, index) => (
                    <Typography component="li" variant="body1" key={index}>
                      {rec.action}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>

          {/* Performance Chart */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Performance Chart
                </Typography>
                <Box sx={{ height: 400 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={testData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="subject" />
                      <YAxis />
                      <RechartsTooltip />
                      <Legend />
                      <Bar dataKey="accuracy" fill={theme.palette.primary.main} />
                      <Bar
                        dataKey="improvementPercentage"
                        fill={theme.palette.secondary.main}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Performance Trend */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Performance Trend
                </Typography>
                <Box sx={{ height: 400 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="test" />
                      <YAxis />
                      <RechartsTooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="Physics"
                        stroke={theme.palette.primary.main}
                      />
                      <Line
                        type="monotone"
                        dataKey="Chemistry"
                        stroke={theme.palette.secondary.main}
                      />
                      <Line
                        type="monotone"
                        dataKey="Biology"
                        stroke="#ff5722"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Heatmap */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Topic-Wise Performance (Heatmap)
                </Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 1 }}>
                  <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>Topic</Typography>
                  <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>Test 1</Typography>
                  <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>Test 2</Typography>
                  <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>Test 3</Typography>
                  <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>Test 4</Typography>
                  <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>Test 5</Typography>
                  {topicPerformanceData.map((row, rowIndex) => (
                    <>
                      <Typography key={`topic-${rowIndex}`} sx={{ fontWeight: "bold" }}>
                        {row.topic}
                      </Typography>
                      {["test1", "test2", "test3", "test4", "test5"].map((testKey, colIndex) => (
                        <Box
                          key={`cell-${rowIndex}-${colIndex}`}
                          sx={generateHeatmapCellStyle(row[testKey])}
                        >
                          {row[testKey] || "-"}
                        </Box>
                      ))}
                    </>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;