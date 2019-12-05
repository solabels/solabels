import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { withPreview } from "gatsby-source-prismic-graphql";

import AboutContent from "../components/paragraph";
import PageContainer from "../components/page-container";
import { Container } from "reactstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const RenderCMS = ({ prismic }) => {
  return (
    <Container>
      <div style={{ margin: "12.5rem 0 30rem" }}>
        <h1
          style={{ margin: "5rem 0", textAlign: "center", fontWeight: "800" }}
        >
          Privacy Policy
        </h1>
        <PageContainer>
          <AboutContent text={prismic.allPrivacys.edges[0].node.text} />
        </PageContainer>
      </div>
    </Container>
  );
};

const About = () => (
  <Layout navDarken={true}>
    <SEO title='About' />
    <StaticQuery query={query} render={withPreview(RenderCMS, query)} />
  </Layout>
);

const query = graphql`
  query {
    prismic {
      allPrivacys {
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
