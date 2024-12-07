import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { FaCheckCircle, FaExclamationTriangle, FaBolt, FaLightbulb } from "react-icons/fa";

const SWOTCard = ({ type, data }) => {
  const typeColors = {
    strengths: { bg: "#e8f5e9", border: "#4caf50", icon: <FaCheckCircle style={{ color: "#4caf50" }} /> },
    weaknesses: { bg: "#fdecea", border: "#e57373", icon: <FaExclamationTriangle style={{ color: "#e57373" }} /> },
    opportunities: { bg: "#e3f2fd", border: "#1976d2", icon: <FaBolt style={{ color: "#1976d2" }} /> },
    threats: { bg: "#fff9c4", border: "#ffeb3b", icon: <FaLightbulb style={{ color: "#ffeb3b" }} /> },
  };

  return (
    <Card sx={{ background: typeColors[type].bg, borderLeft: `5px solid ${typeColors[type].border}` }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {type.charAt(0).toUpperCase() + type.slice(1)} {typeColors[type].icon}
        </Typography>
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SWOTCard;
