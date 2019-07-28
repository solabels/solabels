import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCatch (e) {
    this.setState({
      error: e,
    });
  }

  render () {
    const { children } = this.props;
    if (this.state.error) {
      return (
        <div
          css={{
            backgroundColor: '#ffafaf',
            margin: '1rem',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          <h1>Error has occured, contact the administrator</h1>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object,
  system: PropTypes.string,
};

export default ErrorBoundary;
