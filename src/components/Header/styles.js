import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background:#A6AEBF;
  border-bottom: 1px solid #eef0f7;
  width: 100%;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 999;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    height: 40px;
  }
`;
export const ProfileContainer = styled.div`
  display: flex; /* Align horizontally */
  align-items: center;
  gap: 16px;

  div {
    display: flex;
    align-items: center; /* Align text and avatar horizontally */
    gap: 8px;

    h4 {
      margin: 0;
      font-size: 14px;
      color: ${(props) => props.theme.colors.text.primary};
    }
  }
`;

export const IconContainer = styled.div`
  display: flex; /* Align icons horizontally */
  align-items: center;
  gap: 16px;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.text.secondary};
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
export const LogoText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;
export const SearchBar = styled.div`
  position: relative;
  width: 400px;

  input {
    width: 100%;
    padding: 8px 16px 8px 40px;
    border-radius: 8px;
    border: 1px solid #eef0f7;
    outline: none;
  }

  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => props.theme.colors.text.secondary};
  }
`;
