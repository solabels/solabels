import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import styled from "@emotion/styled";
import { Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { uid } from "react-uid";

import Skew from "../skew";

const ThreeSlotsWrapper = styled.div`
  padding-top: 15rem;
  padding-bottom: 15rem;
  @media ${props => props.theme.media.md} {
    padding-top: 0rem;
  }
`;

const Slot = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  text-align: center;
  span {
    font-family: "Titillium Web", sans-serif;
    font-weight: 500;
    font-size: 5rem;
    opacity: 0.95;
  }
  p {
    font-family: "Titillium Web", sans-serif;
    font-size: 2rem;
    opacity: 0.9;
  }
`;

const ThreeSlots = ({ data }) => {
  const { fields } = data;
  const [isShown, setIsShown] = useState(false);

  function isBottom(el) {
    return el.getBoundingClientRect().top <= window.innerHeight;
  }

  function trackScrolling() {
    if (typeof document !== "undefined") {
      const wrappedElement = document.querySelector(".three-slots");
      if (isBottom(wrappedElement)) {
        setIsShown(true);
        document.removeEventListener("scroll", trackScrolling);
      }
    }
  }

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.addEventListener("scroll", trackScrolling);
      return () => {
        document.removeEventListener("scroll", trackScrolling);
      };
    }
  });
  return (
    <Skew backgroundColor='var(--color-1)'>
      <ThreeSlotsWrapper className='three-slots'>
        <Fade top>
          <Row>
            {fields.map(item => {
              return (
                <Col sm='4' key={uid(item)}>
                  <Slot>
                    <span>
                      {isShown && (
                        <CountUp
                          end={item.number}
                          decimal='.'
                          decimals={item.number % 1 != 0 ? 2 : 0}
                          duration={4}
                        />
                      )}{" "}
                      {item.symbol_after && item.symbol_after[0].text}
                    </span>
                    <p>{item.title[0].text}</p>
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
