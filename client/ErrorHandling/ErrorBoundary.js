import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <p className="warning">
            Something went wrong. Please try later or contact support.
          </p>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {location.href.match(/local/) &&
              this.state.errorInfo.componentStack}
          </details>
        </>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object
};
export default ErrorBoundary;
