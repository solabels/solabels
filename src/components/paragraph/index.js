import React from 'react';
import styled from '@emotion/styled';
import { RichText } from 'prismic-reactjs';

const AboutWrapper = styled.div`
  max-width: 100rem;
  padding: 1.5rem;
  margin: 0 auto;
  font-size: 1.5rem;
  .block-img {
    text-align: center;
    img {
      display: inline-block;
    }
  }
`;

const AboutContent = ({ text }) => {
  return <AboutWrapper>{RichText.render(text)}</AboutWrapper>;
};

export default AboutContent;
