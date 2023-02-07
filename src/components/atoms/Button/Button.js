import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

export const Button = styled.button`
  padding: 7px 20px;
  font-size: ${theme.fontSize.s};
  background-color: ${theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${theme.colors.darkGrey};
`;
