import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Row, Col } from 'reactstrap';

import SolarSetup from './solar-setup.svg';
import Label from './label.svg';

import ExampleLabel1 from './example-label-1.png';
import ExampleLabel2 from './example-label-2.png';

const ScorllContainer = styled.div`
  display: flex;
  position: relative;
  padding: 5rem;
  background-color: rgba(255, 255, 255, 0.5);
  @media ${ props => props.theme.media.lg } {
    overflow-x: scroll;
  }
`;

const SolarSetupImgContainer = styled.div`
  min-width: 95rem;
  position: relative;
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const SolarSetupImg = styled.img`
  display: inline-block;
  position: relative;
  width: 100%;
`;

const LabelTooltipWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  .img-col {
    > img {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .tooltip {
    display: none;
    position: absolute;
    padding: 1.5rem;
    border: 0.1rem solid black;
    font-size: 1.4rem;
    width: 50rem;
    background-color: black;
    color: white;
    top: 5rem;
    text-align: left;
    transform: translateX(-35%);
    box-shadow: 0.1rem 1rem 0.5rem -0.4rem rgba(0, 0, 0, 0.2);
    @media ${ props => props.theme.media.lg } {
      position: absolute;
    }
  }
  &:hover {
    > img {
      text-shadow: 2px 2px #ff0000;
    }
    .tooltip {
      display: block;
    }
  }
`;

const MobileArrow = styled.div`
  display: none;
  position: sticky;
  top: -3.5rem;
  margin-top: -3.5rem;
  right: -4rem;
  margin-right: -2rem;
  font-size: 3.6rem;
  height: 5rem;
  translate: 1s ease;
  animation: pulse 5s ease-in-out infinite;
  span {
    display: block;
    transition: 0.5s;
  }
  span.right {
    transform: rotate(0deg);
  }
  span.left {
    transform: rotate(180deg);
  }
  @media ${ props => props.theme.media.lg } {
    display: inline-block;
  }
`;

const LabelTooltip = ({ LabelImage, LabelText, ...props }) => {
  return (
    <LabelTooltipWrapper {...props}>
      <img height="40" src={Label} />
      <div className="tooltip">
        <Row>
          <Col className="img-col" xs="4">
            <img src={LabelImage} />
          </Col>
          <Col xs="8">{LabelText}</Col>
        </Row>
      </div>
    </LabelTooltipWrapper>
  );
};

const SolarSchema = () => {
  const [arrowClass, setArrowClass] = useState('');

  useEffect(() => {
    const schemaContainer = document.querySelector('.solar-schema-container');
    schemaContainer.addEventListener('scroll', onScrollDiv);
  });

  const onScrollDiv = e => {
    if (e.target.scrollLeft > e.target.offsetWidth) {
      setArrowClass('left');
    } else if (e.target.scrollLeft < 200) {
      setArrowClass('right');
    }
  };
  return (
    <ScorllContainer className="solar-schema-container">
      <SolarSetupImgContainer>
        <h2 style={{ fontSize: '3rem', textAlign: 'center' }}>Solar Label Schema</h2>
        <SolarSetupImg src={SolarSetup} />
        <LabelTooltip
          style={{ bottom: '15%', left: '3.3%' }}
          LabelImage={ExampleLabel1}
          LabelText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        />
        <LabelTooltip
          style={{ bottom: '0%', left: '33%' }}
          LabelImage={ExampleLabel2}
          LabelText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        />
      </SolarSetupImgContainer>
      <MobileArrow>
        <span className={arrowClass}>🡆</span>
      </MobileArrow>
    </ScorllContainer>
  );
};

export default SolarSchema;
