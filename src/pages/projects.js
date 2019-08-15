import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { uid } from 'react-uid';
import { withPreview } from 'gatsby-source-prismic-graphql';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Skew from '../components/Skew';

import Project from '../components/project';
import Layout from '../components/layout';
import SEO from '../components/seo';

const RenderCMS = ({ prismic }) => {
  return (
    <div style={{ margin: '12.5rem 0 30rem' }}>
      <h1 style={{ margin: '5rem 0', textAlign: 'center', fontWeight: '800' }}>Projects</h1>
      <Project
        img={'https://www.lboro.ac.uk/media/wwwlboroacuk/external/content/mediacentre/pressreleases/2019/05/solar-panel-field.jpg'}
        name={'Sunset Farm'}
        location={'Cocoa Beach, Florida'}
        text={
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
        }
      />
      <Project
        img={
          'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F5%2F9%2F1%2F2%2F3152195-1-eng-GB%2F20161107_solar_panel_waste.jpg?source=nar-cms'
        }
        name={'Sunset Farm Da 2nd'}
        location={'Somketown, Colorado'}
        text={
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
        }
      />
    </div>
  );
};

const IndexPage = () => (
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

export default IndexPage;
