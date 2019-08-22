import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';

import AboutContent from '../components/paragraph';
import Layout from '../components/layout';
import SEO from '../components/seo';

const RenderCMS = ({ prismic }) => {
  return (
    <div style={{ margin: '12.5rem 0 30rem' }}>
      <h1 style={{ margin: '5rem 0', textAlign: 'center', fontWeight: '800' }}>About us</h1>
      <div>
        <AboutContent text={prismic.allAbouts.edges[0].node.text} />
      </div>
    </div>
  );
};

const About = () => (
  <Layout navDarken={true}>
    <SEO title="About" />
    <StaticQuery query={query} render={withPreview(RenderCMS, query)} />
  </Layout>
);

const query = graphql`
  query {
    prismic {
      allAbouts {
        edges {
          node {
            text
          }
        }
      }
    }
  }
`;

export default About;
