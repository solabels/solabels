import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';

const RenderCMS = ({ prismic }) => {
  return <Link href="/"><img height="25" src={prismic.allLogos.edges[0].node.logo.url} /></Link>;
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
