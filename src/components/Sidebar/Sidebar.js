import React from 'react';
import { SidebarContainer, Logo, MenuItem } from './styles';
import NeetStudentCalendarWidget from './NeetStudentCalendarWidget';

const Sidebar = () => {
  return (
    <SidebarContainer>
      {/* Logo Section */}
      <Logo>
        <img src="/undefined.png" alt="Logo" />
        <h2>InsightEd</h2>
      </Logo>

      {/* Menu Items Top */}
      <div className="flex flex-col space-y-4">
        <MenuItem active>Dashboard</MenuItem>
        <MenuItem>Courses</MenuItem>
        <MenuItem>Instructors</MenuItem>
        <MenuItem>Settings</MenuItem>
      </div>

      {/* Calendar Widget in Middle */}
      <div className="flex-grow flex items-center justify-center">
        <NeetStudentCalendarWidget />
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
