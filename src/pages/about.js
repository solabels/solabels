import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { uid } from 'react-uid';
import { withPreview } from 'gatsby-source-prismic-graphql';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Skew from '../components/Skew';

import Project from '../components/project';
import Layout from '../components/layout';
import SEO from '../components/seo';

const RenderCMS = ({ prismic }) => {
  return (
    <div style={{ margin: '12.5rem 0 30rem' }}>
      <h1 style={{ margin: '5rem 0', textAlign: 'center', fontWeight: '800' }}>Projects</h1>
      <Project />
      <Project />
    </div>
  );
};

const IndexPage = () => (
  <Layout navDarken={true}>
    <SEO title="Homepage" />
    <StaticQuery query={query} render={withPreview(RenderCMS, query)} />
  </Layout>
);

const query = graphql`
  query {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyMain_banner {
                type
                primary {
                  image
                  text
                }
              }
              ... on PRISMIC_HomepageBody3_slots {
                type
                fields {
                  number
                  text
                  title
                }
              }
              ... on PRISMIC_HomepageBodyHeadline___text {
                type
                primary {
                  title
                  text
                }
              }
              ... on PRISMIC_HomepageBodyContact {
                type
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
