import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';

const RenderCMS = ({ prismic }) => {
  console.log(prismic.allLogos.edges[0].node.logo.url);
  return <img height="25" src={prismic.allLogos.edges[0].node.logo.url} />;
};

const Logo = () => {
  return <StaticQuery query={query} render={withPreview(RenderCMS, query)} />;
};

const query = graphql`
  query {
    prismic {
      allLogos {
        edges {
          node {
            logo
          }
        }
      }
    }
  }
`;

export default Logo;
