import React from 'react';
import { NavContainer, CustomNavLink } from './Navbar.styled';

export const Navbar = () => {
  return (
    <NavContainer>
      <CustomNavLink to="/">Home</CustomNavLink>
      <CustomNavLink to="/movies">Movies</CustomNavLink>
    </NavContainer>
  );
};
