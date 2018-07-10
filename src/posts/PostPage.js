import React, { Component } from 'react';

class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <p dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }} />
      </div>
    );
  }
}

export default PostPage;

export const query = graphql`
  query PostPageQuery($slug: String!){
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      excerpt
      html
      frontmatter {
        title
      }
    }
  }
`
