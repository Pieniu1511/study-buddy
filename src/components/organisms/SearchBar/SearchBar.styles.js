import styled from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 1;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  ${Input} {
    font-size: ${theme.fontSize.xl};
    width: 100%;
    max-width: 350px;
    border: 2px solid ${theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: ${theme.colors.darkGrey};
  font-size: ${theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px;
  }
`;
