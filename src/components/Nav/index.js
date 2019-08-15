import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Nav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1000;
  width: 100%;
  padding: 1rem 6rem;
  font-family: 'Titillium Web', sans-serif;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s;
  ul {
    font-size: 2rem;
    position: relative;
    display: inline-block;
    list-style-type: none;
    height: 100%;
    width: 100%;
    margin: 0;
    opacity: 0.95;
    li {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      display: inline-block;
      color: #fff;
      margin-bottom: 0;
      cursor: pointer;
    }
  }
  &.active-scroll {
    background-color: rgba(0, 0, 0, 0.7);
  }
  @media ${ props => props.theme.media.md } {
    ul {
      display: none;
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
  font-size: 1.8rem;
  height: 100%;
  float: right;
  padding: 1.5rem;
  color: white;
  background-color: var(--color-1);
  border: 0.2rem solid var(--color-1);
  cursor: pointer;
  @media ${ props => props.theme.media.md } {
    display: none;
  }
`;

const NavMenu = () => {
  const [activeClass, setActiveClass] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', addClassOnScroll);
    return () => {
      window.removeEventListener('scroll', addClassOnScroll);
    };
  });

  const addClassOnScroll = () => {
    if (window.scrollY > 200) {
      setActiveClass('active-scroll');
    } else {
      setActiveClass('');
    }
  };
  return (
    <Nav className={activeClass}>
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
