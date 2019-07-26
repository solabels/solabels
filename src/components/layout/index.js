/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';
import { withPreview } from 'gatsby-source-prismic-graphql';

import Header from '../header';
import './layout.css';

const renderLayout = data => {
  const layoutProps = data.prismic.allLayouts.edges[0].node;
  return (
    <>
      <Global
        styles={css`
          :root {
            --main-bg-color: ${ layoutProps.color1 };
          }
          * {
            color: var(--main-bg-color);
          }
        `}
      />
    </>
  );
};

export const Layout = ({ children }) => {
  return (
    <>
      <StaticQuery query={query} render={withPreview(renderLayout, query)} />
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

const query = graphql`
  query {
    prismic {
      allLayouts {
        edges {
          node {
            color1
            color2
            color3
            color4
            color5
          }
        }
      }
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;