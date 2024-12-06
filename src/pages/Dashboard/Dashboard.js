import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import CourseCard from '../../components/CourseCard/CourseCard';
import { ProgressChart } from '../../components/Charts/LineChart';
import Calender from '../../components/Calender';
import Instructors from '../../components/Instructors/Instructors';
import { courseData, monthlyProgressData } from '../../utils/data';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#dee1e7' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: '260px', overflowY: 'auto' }}>
        <Header />
        <div style={{ padding: '24px' }}>
          <h2>Dashboard</h2>
           {/* Layout Wrapper for Cards and Calendar */}
           <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
            {/* Course Cards */}
            <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
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

            {/* Calendar */}
            <div style={{ flex: 0.4, marginLeft: '16px' }}>
              <Calender />
            </div>
          </div>
          
          {/* Progress Chart */}
          <div style={{ marginTop: '24px' }}>
            <ProgressChart data={monthlyProgressData} />
          </div>

          {/* Instructors */}
          <div style={{ marginTop: '24px' }}>
            <Instructors />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
