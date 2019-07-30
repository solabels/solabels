import React from 'react';
import styled from '@emotion/styled';
import { RichText } from 'prismic-reactjs';

const HeadlineTextWrapper = styled.div`
  background-color: var(--color-1);
  color: white;
  padding-top: 3.6rem;
  padding-bottom: 3.6rem;
`;

const HeadlineText = ({ data }) => {
  const { primary } = data;
  return (
    <HeadlineTextWrapper>
      <div>{RichText.render(primary.title)}</div>
      <div>{RichText.render(primary.text)}</div>
    </HeadlineTextWrapper>
  );
};

export default HeadlineText;
