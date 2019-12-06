/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

function SEO() {
  return (
    <div>
      <Helmet>
        <title>
          Solabels co. - A proven solution for your custom solar labeling needs
          - from label design to printing, sorting and shipping.{" "}
        </title>
        <meta
          name='description'
          content="A proven solution for your custom solar labeling needs - from label design to printing, sorting and shipping. Whatever your solar cable label and equipment identification needs are, we have the resources to interpret, generate, print, sort and deliver them in many customizable packages. Our products are thoughtfully created to accelerate your teams' install, reduce on-site resources and decrease the overall cost of electrical installation."
        />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <link href='https://solabels.com/' rel='canonical' />
        <link href='https://solabels.com/' rel='home' />
        <link type='text/plain' href='https://solabels.com/' rel='author' />
      </Helmet>
    </div>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
