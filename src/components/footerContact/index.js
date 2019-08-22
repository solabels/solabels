import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, StaticQuery } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';

import Skew from '../skew';

const CenteredContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${ props => props.theme.media.lg } {
    align-items: initial;
    flex-direction: column;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
  color: white;
  opacity: 0.9;
  .first-line {
    font-size: 1.4rem;
    opacity: 0.6;
    @media ${ props => props.theme.media.lg } {
      margin-top: 1.5rem;
    }
  }
  .second-line {
    font-size: 2.1rem;
  }
`;

const FooterContactCMS = ({ prismic }) => {
  const contactInfo = prismic.allContactss.edges[0].node;
  return (
    <>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Skew backgroundColor="var(--color-1)" style={{ position: 'absolute', width: '100%', top: '0', height: '15rem' }} />
      </div>
      <div style={{ position: 'relative', backgroundColor: 'var(--color-1)', padding: '5rem 0 10rem', zIndex: 2 }}>
        <h2 style={{ fontSize: '4.5rem', color: 'white', textAlign: 'center', marginBottom: '3.5rem' }}>solabels</h2>
        <CenteredContent>
          <Contact>
            <div className="first-line">Working Hours:</div>
            <div className="second-line">24/7</div>
          </Contact>
          <Contact>
            <div className="first-line">Phone:</div>
            <div className="second-line">{contactInfo.phone[0].text}</div>
          </Contact>
          <Contact>
            <div className="first-line">Email:</div>
            <div className="second-line">{contactInfo.email[0].text}</div>
          </Contact>
          <Contact>
            <div className="first-line">Address:</div>
            <div className="second-line">{contactInfo.address[0].text}</div>
          </Contact>
        </CenteredContent>
      </div>
    </>
  );
};

const FooterContact = () => <StaticQuery query={query} render={withPreview(FooterContactCMS, query)} />;

const query = graphql`
  query {
    prismic {
      allContactss {
        edges {
          node {
            address
            email
            phone
          }
        }
      }
    }
  }
`;

export default FooterContact;
