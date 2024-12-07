import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import CourseCard from "../../components/CourseCard/CourseCard";
import { ProgressChart } from "../../components/Charts/LineChart";
import SemiDonutChart from "../../components/Charts/SemiDonutChart"; // Updated SemiDonutChart component
import SWOTCard from "../../components/SWOTAnalysis/SWOTCard";
import RecommendationsCard from "../../components/Recommendations/RecommendationsCard";
import HeatmapChart from "../../components/Heatmap/HeatmapChart";
import SubjectTabs from "../../components/Tabs/SubjectTabs";
import { courseData, monthlyProgressData } from "../../utils/data";
import { swotData, recommendations, heatmapData } from "../../utils/data";
import { Box, Grid, Typography } from "@mui/material";

const Dashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState("Physics");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTabChange = (event, newValue) => {
    setSelectedSubject(newValue);
  };

  const semiDonutData = [
    { subject: "Biology", freshMistakes: 35, oldMistakes: 65 },
    { subject: "Physics", freshMistakes: 45, oldMistakes: 55 },
    { subject: "Chemistry", freshMistakes: 40, oldMistakes: 60 },
  ];
  const handleCourseClick = (courseTitle) => {
    // Navigate to the specific course page
    const route = courseTitle.toLowerCase(); // Convert title to lowercase for routing
    navigate(`/${route}`); // e.g., /biology, /physics, /chemistry
  };
  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#dee1e7" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: "260px", overflowY: "auto" }}>
        <Header />
        <div style={{ padding: "24px" }}>
          <h2>Dashboard</h2>

          {/* Layout Wrapper for Cards and Calendar */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
            {/* Course Cards */}
            <div style={{ display: "flex", gap: "16px", flex: 1 }}>
              {courseData.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  courses={course.courses}
                  color={course.color}
                  backgroundColor={course.backgroundColor}
                  icon={course.icon}
                  onClick={() => handleCourseClick(course.title)} // Pass click handler
                />
              ))}
            </div>
          </div>

          {/* Semi-Donut Charts */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 3,
              marginTop: "24px",
            }}
          >
            {semiDonutData.map((data, index) => (
              <Box
                key={index}
                sx={{
                  width: "30%",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  padding: 3,
                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                }}
              >
                <SemiDonutChart
                  subject={data.subject}
                  freshMistakes={data.freshMistakes}
                  oldMistakes={data.oldMistakes}
                />
              </Box>
            ))}
          </Box>

          {/* AI-Powered Student Dashboard */}
          <Box sx={{ padding: 3, backgroundColor: "#f5f7fa", marginTop: "32px" }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                mb: 4,
                color: "#1976d2",
                fontWeight: "bold",
              }}
            >
              AI-Powered Student Dashboard
            </Typography>

            {/* Subject Tabs */}
            <SubjectTabs
              subjects={Object.keys(swotData)}
              selected={selectedSubject}
              onChange={handleTabChange}
            />

            {/* SWOT Analysis */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {["strengths", "challenges", "opportunities", "threats"].map((type) => (
                <Grid item xs={12} sm={6} key={type}>
                  <SWOTCard type={type} data={swotData[selectedSubject][type]} />
                </Grid>
              ))}
            </Grid>

            {/* Study Recommendations */}
            <RecommendationsCard
              subject={selectedSubject}
              recommendations={recommendations[selectedSubject]}
            />

            {/* Heatmap Chart */}
            <HeatmapChart data={heatmapData} />
          </Box>

          {/* Progress Chart */}
          <div style={{ marginTop: "24px" }}>
            <ProgressChart data={monthlyProgressData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
