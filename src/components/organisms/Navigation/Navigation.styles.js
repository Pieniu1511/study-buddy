import styled from 'styled-components';
import { theme } from 'assets/styles/theme';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
`;

export const Logo = styled.div`
  background-color: ${theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    text-align: right;
    margin-right: 20px;
    color: ${theme.colors.white};
    font-size: 15px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${theme.colors.darkGrey};
  font-weight: bold;
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;

  &.active {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    position: absolute;
    right: -20px;
    width: 18px;
    height: 3px;
    transform: translateY(-50%);
    top: 50%;
    background-color: ${theme.colors.darkPurple};
  }
`;
