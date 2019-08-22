import React from 'react';
import styled from '@emotion/styled';
import { FaAngleDown } from 'react-icons/fa';

const Banner = styled.div`
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: var(--color-1);
  overflow: hidden;
  z-index: 2;
  video {
    position: absolute;
    top: 0;
    width: 100%;
    top: 50%;
    left: 50%;
    margin: auto;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;

const TopGradient = styled.div`
  position: absolute;
  opacity: 0.5;
  background: linear-gradient(to bottom, var(--color-4) 5%, rgba(255, 255, 255, 0) 100%);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const BottomGradient = styled.div`
  position: absolute;
  background: linear-gradient(to top, var(--color-1) 5%, rgba(255, 255, 255, 0) 100%);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Text = styled.div`
  z-index: 2;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  color: white;
  justify-content: center;
  text-align: center;
  opacity: 0.95;
  @media ${ props => props.theme.media.md } {
    h1 {
      font-size: 4rem;
    }
  }
`;

const ScrollDown = styled.div`
  z-index: 3;
  position: absolute;
  color: white;
  bottom: 5%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  cursor: pointer;
  span {
    display: block;
    font-weight: bold;
    letter-spacing: 0.2rem;
    font-size: 1rem;
    padding-bottom: 0.1rem;
  }
  .icon {
    opacity: 0.5;
  }
  &:hover {
    .icon {
      opacity: 0.8;
    }
  }
  @media ${ props => props.theme.media.md } {
    display: none;
  }
`;

const MainBanner = ({ data }) => {
  const { primary } = data;
  const scrollDown = () => {
    const scrollTo = document.querySelector('.scroll-to');

    scrollTo.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  };
  return (
    // <Banner style={{ backgroundImage: `url(${ primary.image.url })`, height: primary.image.dimensions.height }}>
    <Banner style={{ height: '45vw' }}>
      <TopGradient />
      <Text>
        <h1>{primary.text[0].text}</h1>
      </Text>
      <video autoPlay="autoplay" muted loop>
        <source src="https://www.findusnow.com/img/video/solarpower.mp4" type="video/mp4" />
      </video>
      <ScrollDown onClick={scrollDown}>
        <span>SCROLL DOWN</span>
        <FaAngleDown className="icon" size="3.5rem" color="white" />
      </ScrollDown>
      <BottomGradient />
    </Banner>
  );
};

export default MainBanner;
