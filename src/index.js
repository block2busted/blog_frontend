import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import BlogAPIService from "./services/BlogAPIService";
import { BlogServiceProvider } from "./components/BlogServiceContext";
import store from "./store";
import App from "./components/App";

const blogAPIService = new BlogAPIService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BlogServiceProvider value={blogAPIService}>
        <Router>
          <App />
        </Router>
      </BlogServiceProvider>
    </ErrorBoundary>
  </Provider>, document.getElementById('root')
)