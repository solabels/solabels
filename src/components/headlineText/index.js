import React from 'react';
import styled from '@emotion/styled';
import { RichText } from 'prismic-reactjs';

const HeadlineTextWrapper = styled.div`
  background-color: var(--color-1);
  color: white;
  padding-top: 9rem;
  padding-bottom: 9rem;
  text-align: center;
`;

const Title = styled.div`
  font-size: 4.5rem;
  font-family: 'Titillium Web', sans-serif;
  opacity: 0.9;
  strong {
    font-weight: 700;
  }
  @media ${ props => props.theme.media.md } {
    font-size: 3.5rem;
  }
`;

const Text = styled.div`
  font-size: 2rem;
  max-width: 850px;
  font-weight: 400;
  margin: 2rem auto 0;
  opacity: 0.9;
  @media ${ props => props.theme.media.md } {
    padding: 1rem;
    font-size: 2rem;
  }
`;

const HeadlineText = ({ data }) => {
  const { primary } = data;
  return (
    <HeadlineTextWrapper className="scroll-to-down">
      <div style={{ maxWidth: '74rem', margin: 'auto' }}>
        <Title>{RichText.render(primary.title)}</Title>
        <Text>{RichText.render(primary.text)}</Text>
      </div>
    </HeadlineTextWrapper>
  );
};

export default HeadlineText;
