import React from 'react';
import { SidebarContainer, Logo, MenuItem } from './styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <img src="/undefined.png" alt="Logo" />
        <h2>EduPlatform</h2>
      </Logo>
      <MenuItem active>Dashboard</MenuItem>
      <MenuItem>Courses</MenuItem>
      <MenuItem>Instructors</MenuItem>
      <MenuItem>Settings</MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
