import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { IoMdMenu } from 'react-icons/io';
import styled from '@emotion/styled';
import scrollTo from '../../util/scrollTo';

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
      &:last-of-type {
        i {
          display: none;
        }
        float: right;
        @media ${ props => props.theme.media.lg } {
          i {
            display: block;
          }
          float: none;
        }
      }
    }
    li.desktop {
      display: none;
    }
  }
  &.active-scroll {
    background-color: rgba(0, 0, 0, 0.7);
  }
  @media ${ props => props.theme.media.lg } {
    padding: 1rem 3rem;
    ul.desktop {
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
  @media ${ props => props.theme.media.lg } {
    display: none;
  }
  &.mobile {
    display: block;
    text-align: center;
    width: 100%;
  }
`;

const MobileMenuWrapper = styled.div`
  display: none;
  font-size: 2.5rem;
  color: white;
  margin-left: auto;
  cursor: pointer;
  @media ${ props => props.theme.media.lg } {
    display: block;
  }
`;

const MobileMenuDropdown = styled.div`
  display: none;
  position: fixed;
  top: 5.7rem;
  left: 0rem;
  width: 100%;
  background-color: black;
  @media ${ props => props.theme.media.lg } {
    display: block;
    ul {
      li {
        display: block !important;
        padding: 0.7rem 3rem;
      }
    }
  }
`;

const NavMenu = ({ navDarken }) => {
  const addClassOnScroll = () => {
    if (window.scrollY > 200) {
      setActiveClass('active-scroll');
    } else {
      setActiveClass('');
    }
  };
  const scrollToContact = () => {
    scrollTo('.scroll-to-contact');
  };

  const [activeClass, setActiveClass] = useState('');
  const [toggleMobile, setToggleMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', addClassOnScroll, true);
    return () => {
      window.removeEventListener('scroll', addClassOnScroll);
    };
  }, [addClassOnScroll]);

  return (
    <Nav className={activeClass} navDarken={navDarken} style={toggleMobile ? { backgroundColor: 'black' } : {}}>
      <Logo>solabels</Logo>
      <MenuItem scrollToContact={scrollToContact} screen="desktop" />
      <MobileMenuWrapper onClick={() => setToggleMobile(!toggleMobile)}>
        <IoMdMenu />
      </MobileMenuWrapper>
      <ContactButton onClick={scrollToContact}>Contact</ContactButton>
      {toggleMobile && (
        <MobileMenuDropdown>
          <MenuItem scrollToContact={scrollToContact} screen="mobile" />
        </MobileMenuDropdown>
      )}
    </Nav>
  );
};

const MenuItem = ({ screen, scrollToContact }) => {
  return (
    <>
      <ul className={screen}>
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
        <li className={screen} onClick={scrollToContact}>
          Contact
        </li>
        <li>
          <a href="tel:3215064704">(321) 506-4704</a>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;
