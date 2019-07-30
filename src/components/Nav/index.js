import React from 'react';
import styled from '@emotion/styled';
import { StickyContainer, Sticky } from 'react-sticky';

const Nav = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 1000;
  width: 100%;
  padding: 2rem 6rem;
  ul {
    position: relative;
    display: inline-block;
    list-style-type: none;
    height: 100%;
    width: 100%;
    margin: 0;
    li {
      font-size: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      display: inline-block;
      color: #fff;
      margin-bottom: 0;
      cursor: pointer;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  margin-right: 5rem;
  img {
    width: auto;
    margin-bottom: 0;
  }
`;

const ContactButton = styled.div`
  font-size: 1.5rem;
  height: 100%;
  float: right;
  padding: 1.5rem;
  color: white;
  background-color: var(--color-1);
  border: 0.2rem solid var(--color-1);
  cursor: pointer;
`;

const NavMenu = () => {
  return (
    <Nav>
      <Logo>
        <img height="30" src="http://lanman2018.ieee-lanman.org/files/2016/01/sample-logo@2x.png" />
      </Logo>
      <ul>
        <li>
          <a to="/">Home</a>
        </li>
        <li>
          <a to="/">Services</a>
        </li>
        <li>
          <a to="/">Labels</a>
        </li>
        <li>
          <a to="/">Blog</a>
        </li>
      </ul>
      <ContactButton>Contact</ContactButton>
    </Nav>
  );
};

export default NavMenu;
