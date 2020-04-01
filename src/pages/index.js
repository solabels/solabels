import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Row, Col } from 'reactstrap';
import { uid } from 'react-uid';
import { withPreview } from 'gatsby-source-prismic-graphql';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CmsRow from '../components/cmsRow';

const RenderCMS = ({ prismic }) => {
  return (
    <div>
      {prismic.allHomepages.edges[0].node.body.map(row => (
        <Row key={uid(row)}>
          <Col md='12'>
            <CmsRow type={row.type} data={row} />
          </Col>
        </Row>
      ))}
    </div>
  );
};

const IndexPage = () => (
  <Layout>
    <SEO title='Homepage' />
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
                  symbol_after
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
