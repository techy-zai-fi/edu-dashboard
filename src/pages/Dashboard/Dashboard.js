import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import CourseCard from "../../components/CourseCard/CourseCard";
import { ProgressChart } from "../../components/Charts/LineChart";
import Instructors from "../../components/Instructors/Instructors";
import SWOTCard from "../../components/SWOTAnalysis/SWOTCard";
import RecommendationsCard from "../../components/Recommendations/RecommendationsCard";
import HeatmapChart from "../../components/Heatmap/HeatmapChart";
import SubjectTabs from "../../components/Tabs/SubjectTabs";
import { courseData, monthlyProgressData } from "../../utils/data";
import { swotData, recommendations, heatmapData } from "../../utils/data";
import { Box, Grid, Typography } from "@mui/material";

const Dashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState("Physics");

  const handleTabChange = (event, newValue) => {
    setSelectedSubject(newValue);
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
                />
              ))}
            </div>
          </div>

          {/* Progress Chart */}
          <div style={{ marginTop: "24px" }}>
            <ProgressChart data={monthlyProgressData} />
          </div>

          {/* Instructors */}
          <div style={{ marginTop: "24px" }}>
            <Instructors />
          </div>

          {/* AI-Powered Student Dashboard */}
          <Box sx={{ padding: 3, backgroundColor: "#f5f7fa", marginTop: "32px" }}>
            <Typography variant="h4" sx={{ textAlign: "center", mb: 4, color: "#1976d2", fontWeight: "bold" }}>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
