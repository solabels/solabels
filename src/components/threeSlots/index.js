import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import styled from '@emotion/styled';
import { RichText } from 'prismic-reactjs';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { uid } from 'react-uid';

import Skew from '../skew';

const ThreeSlotsWrapper = styled.div`
  padding-top: 15rem;
  padding-bottom: 15rem;
`;

const Slot = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  text-align: center;
  span {
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-size: 4.5rem;
  }
`;

const ThreeSlots = ({ data }) => {
  const { fields } = data;
  const [isShown, setIsShown] = useState(false);

  function isBottom (el) {
    return el.getBoundingClientRect().top <= window.innerHeight;
  }

  function trackScrolling () {
    const wrappedElement = document.querySelector('.three-slots');
    if (isBottom(wrappedElement)) {
      setIsShown(true);
      document.removeEventListener('scroll', trackScrolling);
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling);
    return () => {
      document.removeEventListener('scroll', trackScrolling);
    };
  });
  return (
    <Skew backgroundColor="var(--color-1)">
      <ThreeSlotsWrapper className="three-slots">
        <Fade top>
          <Row>
            {fields.map(item => {
              return (
                <Col sm="4" key={uid(item)}>
                  <Slot>
                    <span>{isShown && <CountUp end={item.number} duration={4} />}</span>
                    <div>{item.title[0].text}</div>
                  </Slot>
                </Col>
              );
            })}
          </Row>
        </Fade>
      </ThreeSlotsWrapper>
    </Skew>
  );
};

export default ThreeSlots;
