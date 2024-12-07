import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { FaLightbulb } from "react-icons/fa";

const RecommendationsCard = ({ subject, recommendations }) => (
  <Card sx={{ mb: 4, background: "#fff9c4", borderLeft: "5px solid #ffc107" }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        <FaLightbulb color="yellow" style={{ marginRight: 8 }} />
        Study Recommendations: {subject}
      </Typography>
      <ul>
        {recommendations.map((rec, index) => (
          <Typography key={index} component="li">
            {rec}
          </Typography>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default RecommendationsCard;
