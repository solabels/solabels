import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { uid } from 'react-uid';
import { withPreview } from 'gatsby-source-prismic-graphql';

import Project from '../components/project';
import Layout from '../components/layout';
import SEO from '../components/seo';

const RenderCMS = ({ prismic }) => {
  return (
    <div style={{ margin: '12.5rem 0 30rem' }}>
      <h1 style={{ margin: '5rem 0', textAlign: 'center', fontWeight: '800' }}>
        Projects
      </h1>
      {prismic.allProjectss.edges[0].node.body.map(project => {
        return (
          <Project
            key={uid(project)}
            img={project.primary.image && project.primary.image.url}
            name={project.primary.title[0].text}
            location={project.primary.location[0].text}
            capacity={project.primary.capacity[0].text}
            labels={project.primary.labels[0].text}
            text={project.primary.text}
          />
        );
      })}
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
      allProjectss {
        edges {
          node {
            body {
              ... on PRISMIC_ProjectsBodyProject {
                primary {
                  image
                  title
                  location
                  capacity
                  labels
                  text
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
