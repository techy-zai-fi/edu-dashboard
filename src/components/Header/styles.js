import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #dee1e7;
  border-bottom: 1px solid #eef0f7;
  width: 100%;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 999;
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
