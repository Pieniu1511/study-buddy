import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
