import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${props => props.theme.colors.grey};
  }

  .card {
    background: ${props => props.theme.colors.white};
    border-radius: 12px;
    box-shadow: ${props => props.theme.shadows.card};
    padding: 24px;
  }

  .btn-primary {
    background: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;
