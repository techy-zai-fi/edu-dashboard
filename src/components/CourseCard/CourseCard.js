import React from 'react';
import { Card, CourseIcon } from './styles';

const CourseCard = ({ title, courses, color, icon, backgroundColor ,onClick }) => {
  return (
    <Card onClick={onClick}  backgroundColor={backgroundColor}>
      <CourseIcon color={color}>
        <img src={icon} alt={`${title} icon`} />
      </CourseIcon>
      <div>
        <h4>{title}</h4>
        <p>{courses} Tests</p>
      </div>
    </Card>
  );
};

export default CourseCard;
