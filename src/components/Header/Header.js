// src/components/Header/Header.js
import React from 'react';
import { HeaderContainer, SearchBar } from './styles';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar>
        <SearchIcon />
        <input type="text" placeholder="Search courses..." />
      </SearchBar>
      <div>
        {/* Add notification and profile dropdowns as needed */}
        <img src="/student.png" alt="User Avatar" style={{ width: 40, borderRadius: '50%' }} />
        <h4>Rishi</h4>
      </div>
    </HeaderContainer>
  );
};

export default Header;
