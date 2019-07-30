import React from 'react';
import styled from '@emotion/styled';
import { RichText } from 'prismic-reactjs';

const HeadlineTextWrapper = styled.div`
  background-color: var(--color-1);
  color: white;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  text-align: center;
`;

const Title = styled.div`
  font-size: 45px;
  font-family: 'Titillium Web', sans-serif;

  strong {
    font-weight: 700;
  }
`;

const Text = styled.div`
  font-size: 2rem;
  max-width: 850px;
  font-weight: 400;
  margin: 2rem auto 0;
`;

const HeadlineText = ({ data }) => {
  const { primary } = data;
  return (
    <HeadlineTextWrapper>
      <div style={{ maxWidth: '74rem', margin: 'auto' }}>
        <Title>{RichText.render(primary.title)}</Title>
        <Text>{RichText.render(primary.text)}</Text>
      </div>
    </HeadlineTextWrapper>
  );
};

export default HeadlineText;
