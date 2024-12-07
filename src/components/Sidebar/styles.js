import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 260px;
  height: 100vh;
  background:#03346E;
  padding: 24px;
  border-right: 1px solid #eef0f7;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000; /* Ensure it's above content */
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;

  img {
    height: 32px;
    border-radius: 25%; /* Makes the logo circular */
    overflow: hidden; /* Ensures the image does not spill out */
  }
   h2 {
    color:#ffffff; /* Default title color */
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text.secondary};
  background: ${props => props.active ? props.theme.colors.grey : 'transparent'};

  &:hover {
    background: ${props => props.theme.colors.grey};
    color: #0094ff; /* Blue color on hover */
  }
`;
