/** @format */

// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavLogo,
  StyledAppBar,
  StyledLogoLink,
  StyledLogoImage,
  NavLinks, // Import NavLinks
  NavLinkItem, // Import NavLinkItem
} from '../../themes/styles/default'; // Import Nav and NavLink styles

import logoImage from '../../assets/judoImages/logo.png'; // Import logo image

const Navbar = () => {
  return (
    <StyledAppBar>
      <Nav>
        <NavLogo>
          <StyledLogoLink href="/">
            <StyledLogoImage src={logoImage} alt="Home" />
          </StyledLogoLink>
        </NavLogo>
        <NavLinks>
          <NavLinkItem>
            <NavLink to="/login">Login</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="/about">About us</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="/fitness">Exercises</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="/#contact">Contact Us</NavLink>
          </NavLinkItem>
        </NavLinks>
      </Nav>
    </StyledAppBar>
  );
};

export default Navbar;
