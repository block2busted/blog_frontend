import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return this.props.children;
  }
}
