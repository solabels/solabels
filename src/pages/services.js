import React from "react";
import styled from "@emotion/styled";
import { graphql, StaticQuery } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import { withPreview } from "gatsby-source-prismic-graphql";
import SolarSchema from "../components/solar-schema";
import { FaToiletPaper, FaTools } from "react-icons/fa";
import { RichText } from "prismic-reactjs";
import { uid } from "react-uid";

import PageContainer from "../components/page-container";
import Layout from "../components/layout";
import SolarSchemaWrapper from "../components/SolarSchemaWrapper";
import SEO from "../components/seo";

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
  const Icon = {
    roll: <FaToiletPaper />,
    tools: <FaTools />
  };
  return (
    <div style={{ margin: "12.5rem 0 12.5rem" }}>
      <h1 style={{ margin: "5rem 0", textAlign: "center", fontWeight: "800" }}>
        Services
      </h1>
      <Container>
        <PageContainer>
          <Row style={{ paddingBottom: "4rem" }}>
            <Col>
              <p style={{ fontSize: "1.6rem" }}>
                {RichText.render(
                  prismic.allServicess.edges[0].node.service_text
                )}
              </p>
            </Col>
          </Row>
          <Row>
            {prismic.allServicess.edges[0].node.body.map(serviceGroup => {
              return (
                <Col key={uid(serviceGroup)} sm='6'>
                  <ServicesTitle>
                    <span style={{ fontSize: "3.5rem" }}>{Icon["tools"]}</span>
                    {serviceGroup.primary.heading[0].text}
                  </ServicesTitle>
                  <ServicesList>
                    {serviceGroup.fields.map(service => (
                      <li key={uid(service)}>{service.service[0].text}</li>
                    ))}
                  </ServicesList>
                </Col>
              );
            })}
          </Row>
        </PageContainer>
      </Container>
      <SolarSchemaWrapper style={{ marginTop: "2rem" }} isHomepage={false}>
        <SolarSchema />
      </SolarSchemaWrapper>
    </div>
  );
};

const Projects = () => (
  <Layout navDarken={true}>
    <SEO title='Projects' />
    <StaticQuery query={query} render={withPreview(RenderCMS, query)} />
  </Layout>
);

const query = graphql`
  query {
    prismic {
      allServicess {
        edges {
          node {
            service_text
            body {
              ... on PRISMIC_ServicesBodyService_group {
                type
                label
                primary {
                  heading
                }
                fields {
                  service
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Projects;
