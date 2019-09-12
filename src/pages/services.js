import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import { withPreview } from 'gatsby-source-prismic-graphql';
import { FaToiletPaper, FaTools } from 'react-icons/fa';

import Layout from '../components/layout';
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
    <div style={{ margin: '12.5rem 0 30rem' }}>
      <h1 style={{ margin: '5rem 0', textAlign: 'center', fontWeight: '800' }}>Services</h1>
      <Container>
        <Row style={{ paddingBottom: '4rem' }}>
          <Col>
            <p style={{ fontSize: '2rem' }}>
              Our products can be generated fast and are a solution for non-conformance and emergency solutions. We provide the following services:
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
