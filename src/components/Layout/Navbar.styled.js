import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export const CustomNavLink = styled(NavLink)`
  color: #00ff00; /* Зеленый цвет */
  text-decoration: none;
  padding: 5px 10px;
  transition: color 0.3s;

  &:hover {
    color: #ffa500; /* Оранжевый цвет */
  }
`;
