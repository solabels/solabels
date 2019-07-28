import React from 'react';
import MainBanner from '../mainBanner';
import ErrorBoundary from '../errorBoundary';

const CmsComponent = ({ type, data }) => {
  switch (type) {
  case 'main_banner':
    return <MainBanner data={data} />;
  default:
    return null;
  }
};

const CmsRow = ({ type, data }) => (
  <ErrorBoundary system="CMS">
    <CmsComponent type={type} data={data} />
  </ErrorBoundary>
);

export default CmsRow;
