import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import { uid } from 'react-uid';
import { withPreview } from 'gatsby-source-prismic-graphql';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CmsRow from '../components/cmsRow';

const RenderCMS = ({ prismic }) => {
  return (
    <div>
      {prismic.allHomepages.edges[0].node.body.map(row => (
        <Container key={uid(row)}>
          <Row>
            <Col md="12">
              <CmsRow type={row.type} data={row} />
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <StaticQuery query={query} render={withPreview(RenderCMS, query)} />
    <Link to="/page-2/">Go to page 2</Link>
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
