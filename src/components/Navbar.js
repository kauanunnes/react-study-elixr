import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

import { FaBars } from 'react-icons/fa'
import { menuData } from "../data/MenuData";
import { Button } from "./Button";

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;

  padding: 1rem 2rem;

  z-index: 100;


`;
const NavLink = css`
  color: #fff;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: #000d1a;
  }
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }

`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  
  @media screen and (max-width: 768px) {
    display: none;
  }

`;

function Navbar({ toggle }) {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary='true' to="/contact">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
