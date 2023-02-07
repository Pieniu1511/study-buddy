import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.grey};
  }
`;

export const StyledAverage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSize.s};
  color: ${theme.colors.white};
  font-weight: bold;
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    align-items: center;
    font-weight: bold;
    font-size: ${theme.fontSize.l};
    display: flex;
  }

  p:last-child {
    font-size: ${theme.fontSize.m};
  }
`;
