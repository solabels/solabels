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
import { ThemeProvider } from 'emotion-theming';

import './layout.css';
import Nav from '../Nav';
import FooterContact from '../footerContact';
import Footer from '../footer';

const theme = {
  zIndex: {},
  media: {
    xl: 'screen and (max-width: 1199px)',
    lg: 'screen and (max-width: 991px)',
    md: 'screen and (max-width: 767px)',
    sm: 'screen and (max-width: 575px)',
    xs: 'screen and (max-width: 0px)'
  }
};

const renderLayout = data => {
  const layoutProps = data.prismic.allLayouts.edges[0].node;
  return (
    <>
      <Global
        styles={css`
          :root {
            --color-1: ${ layoutProps.color1 };
            --color-2: ${ layoutProps.color2 };
            --color-3: ${ layoutProps.color3 };
            --color-4: ${ layoutProps.color4 };
            --color-5: ${ layoutProps.color5 };
          }
          body {
            overflow-x: hidden;
            background-image: url(${ layoutProps.background_image.url });
            background-position: right bottom;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: contain;
            background-color: var(--color-5);
          }
        `}
      />
    </>
  );
};

export const Layout = ({ children, navDarken }) => {
  return (
    <ThemeProvider theme={theme}>
      <StaticQuery query={query} render={withPreview(renderLayout, query)} />
      <Nav navDarken={navDarken} />
      <main>{children}</main>
      <div style={{ marginTop: '15rem' }}></div>
      <FooterContact />
      <Footer />
    </ThemeProvider>
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
            background_image
          }
        }
      }
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
