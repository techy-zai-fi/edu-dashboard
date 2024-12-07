import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  LogoText,
  SearchBar,
  IconContainer,
  ProfileContainer,
} from './styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MessageIcon from '@mui/icons-material/Message';

const Header = () => {
  return (
    <HeaderContainer>
      {/* Search Bar */}
      <SearchBar>
        <SearchIcon />
        <input type="text" placeholder="Search courses..." />
      </SearchBar>

      {/* Icons and Profile Section */}
      <ProfileContainer>
        <IconContainer>
          <NotificationsIcon fontSize="medium" />
          <MessageIcon fontSize="medium" />
          <SettingsIcon fontSize="medium" />
        </IconContainer>
        <div>
          <img
            src="/student.png"
            alt="User Avatar"
            style={{ width: 40, height: 40, borderRadius: '50%' }}
          />
          <h4>Rishi</h4>
        </div>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
