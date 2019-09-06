import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
  position: fixed;
  display: flex;
  top: 0%;
  align-items: center;
  z-index: 1000;
  width: 100%;
  padding: 1rem 6rem;
  font-family: 'Titillium Web', sans-serif;
  background-color: ${ props => (props.navDarken ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)') };
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
      a {
        text-decoration: none;
        color: white;
        transition: 0.2s opacity;
        &:hover {
          opacity: 0.7;
        }
      }
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
  font-size: 2rem;
  color: white;
  font-weight: 800;
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

const NavMenu = ({ navDarken }) => {
  const [activeClass, setActiveClass] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', addClassOnScroll, true);
    return () => {
      window.removeEventListener('scroll', addClassOnScroll);
    };
  }, [addClassOnScroll]);

  const addClassOnScroll = () => {
    if (window.scrollY > 200) {
      setActiveClass('active-scroll');
    } else {
      setActiveClass('');
    }
  };
  return (
    <Nav className={activeClass} navDarken={navDarken}>
      <Logo>solabels</Logo>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <ContactButton>Contact</ContactButton>
    </Nav>
  );
};

export default NavMenu;
