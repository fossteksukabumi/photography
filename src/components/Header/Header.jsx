import React, { useState } from "react";
import { HeaderContainer, Logo, NavMenu, MenuButton } from "./Header.style";
import Logo1 from '../../assets/logo/logo1.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>
        <img src={Logo1} alt="Logo" />
      </Logo>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>☰</MenuButton>
      <NavMenu isOpen={isOpen}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
