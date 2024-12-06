import React from 'react';
import { Card, CourseIcon } from './styles';

const CourseCard = ({ title, courses, backgroundColor ,color, icon }) => {
  return (
    <Card backgroundColor={backgroundColor}>
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
