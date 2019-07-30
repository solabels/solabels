import React, { useState, useEffect, Children } from 'react';
import styled from '@emotion/styled';

const SkewWrapper = styled.section`
  position: relative;
  transform: skew(0deg, -4deg);
  margin-top: -4%;
  padding-top: 4%;
  background-color: ${ props => props.backgroundColor };
  box-shadow: 0px 10px 0.5rem -0.4rem rgba(0, 0, 0, 0.2);
`;

const SkewedDiv = styled.div`
  transform: skew(0deg, 4deg);
`;

const Skew = ({ children, backgroundColor = 'transperant' }) => {
  return (
    <SkewWrapper backgroundColor={backgroundColor}>
      <SkewedDiv>{children}</SkewedDiv>
    </SkewWrapper>
  );
};

export default Skew;
