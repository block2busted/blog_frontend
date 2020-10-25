import React from "react";
import  { BlogServiceConsumer } from "../BlogServiceContext";


const withBlogService = () => (Wrapped) => {
  return (props) => {
    return(
      <BlogServiceConsumer>
        {
          (blogAPIService) => {
            return (
              <Wrapped
                {...props}
                blogAPIService={blogAPIService}
              />
            )
          }
        }
      </BlogServiceConsumer>
    )
  }
}

export default withBlogService;