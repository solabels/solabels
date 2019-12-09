import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { withPreview } from "gatsby-source-prismic-graphql";

import AboutContent from "../components/paragraph";
import PageContainer from "../components/page-container";
import { Container } from "reactstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => (
  <Layout navDarken={true}>
    <SEO title='About' />
    <Container>
      <div style={{ margin: "12.5rem 0 30rem" }}>
        <h1
          style={{ margin: "5rem 0", textAlign: "center", fontWeight: "800" }}
        >
          Thank you for getting in touch!
        </h1>
        <PageContainer>
          <h2 style={{ textAlign: "center", height: "5rem" }}>
            We appreciate you contacting us. One of our colleagues will get back
            in touch with you soon! Have a great day!
          </h2>
        </PageContainer>
      </div>
    </Container>
  </Layout>
);

const query = graphql`
  query {
    prismic {
      allTocs {
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
