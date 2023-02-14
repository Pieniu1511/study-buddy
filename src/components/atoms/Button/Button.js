import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

export const Button = styled.button`
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  background-color: ${theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${theme.colors.darkGrey};
`;
