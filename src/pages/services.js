import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import { withPreview } from 'gatsby-source-prismic-graphql';
import SolarSchema from '../components/solar-schema';
import { FaToiletPaper, FaTools } from 'react-icons/fa';

import Layout from '../components/layout';
import SolarSchemaWrapper from '../components/SolarSchemaWrapper';
import SEO from '../components/seo';

const ServicesTitle = styled.h2`
  display: block;
  font-size: 2rem;
  align-items: center;
  span {
    margin-right: 0.5rem;
  }
`;

const ServicesList = styled.ul`
  list-style-type: square;
  li {
    font-size: 1.6rem;
  }
`;

const RenderCMS = ({ prismic }) => {
  return (
    <div style={{ margin: '12.5rem 0 12.5rem' }}>
      <h1 style={{ margin: '5rem 0', textAlign: 'center', fontWeight: '800' }}>Services</h1>
      <Container>
        <Row style={{ paddingBottom: '4rem' }}>
          <Col>
            <p style={{ fontSize: '2rem' }}>
              Here at <strong>SOlabels</strong> our business is simplifying your business. We offer a number of categorized products and are always
              looking for new ways to serve and create value for our customers. We have produced label packages for many utility-scale and commercial
              solar arrays. Our services enable our customers to reduce on-site personnel and control the costs of site-specific label generation.
              Beyond creating labels for the build at hand our services will share files as a deliverable to O&M and even print additional cable
              labeling for post-construction operations. If you have a need that we don't already specify reach out to one of our team members and we
              will work to provide it to you.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <ServicesTitle>
              <span style={{ fontSize: '3.5rem' }}>
                <FaToiletPaper />
              </span>
              Cable label design:
            </ServicesTitle>
            <ServicesList>
              <li>UV Resistant Self Laminating Wrap Around</li>
              <li>Direct Current Feeders - DCF</li>
              <li>Medium Voltage Alternating Current MVAC</li>
              <li>String Cable</li>
              <li>Fiber Optic</li>
              <li>Low Voltage</li>
              <li>Miscellaneous communications</li>
              <li>PLC- vitals- Meteorological </li>
              <li>Trunk Bus collection </li>
              <li>Harness collection </li>
              <li>IPC collection</li>
            </ServicesList>
          </Col>
          <Col sm="6">
            <ServicesTitle>
              <span style={{ fontSize: '3.5rem' }}>
                <FaTools />
              </span>
              Equipment identification design:
            </ServicesTitle>
            <ServicesList>
              <li>UV Resistant Self Laminating Wrap Around</li>
              <li>Direct Current Feeders - DCF</li>
              <li>Medium Voltage Alternating Current MVAC</li>
              <li>String Cable</li>
              <li>Fiber Optic</li>
              <li>Low Voltage</li>
              <li>Miscellaneous communications</li>
              <li>PLC- vitals- Meteorological </li>
              <li>Trunk Bus collection </li>
              <li>Harness collection </li>
              <li>IPC collection</li>
            </ServicesList>
          </Col>
        </Row>
      </Container>
      <SolarSchemaWrapper style={{ marginTop: '2rem' }} isHomepage={false}>
        <SolarSchema />
      </SolarSchemaWrapper>
    </div>
  );
};

const Projects = () => (
  <Layout navDarken={true}>
    <SEO title="Projects" />
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

export default Projects;
