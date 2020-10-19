import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundry from "./components/ErrorBoundry";
import BlogAPIService from "./services/BlogAPIService";
import { BlogServiceProvider } from "./components/BlogServiceContext";
import store from "./store";
import App from "./components/App";

const blogAPIService = new BlogAPIService();

ReactDOM.render(
    <Provider store={store}>

            <BlogServiceProvider value={blogAPIService}>
                <Router>
                    <App />
                </Router>
            </BlogServiceProvider>

    </Provider>, document.getElementById('root')
)