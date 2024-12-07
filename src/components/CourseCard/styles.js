import styled from 'styled-components';

export const Card = styled.div`
  background: ${props => props.backgroundColor || 'white'};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.2s;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
  }

  h4 {
    margin: 0;
    font-size: 16px;
    color: ${props => props.theme.colors.text.primary};
  }

  p {
    margin: 0;
    font-size: 14px;
    color:#747473;
  }
`;

export const CourseIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.color};
  img {
    width: 100%; /* Image fully fills the container width */
    height: 100%; /* Image fully fills the container height */
    object-fit: cover; /* Ensures the image covers the container */
    border-radius: 12px;
  }
`;
