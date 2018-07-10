import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components"

const StyledBlogLink = styled(Link)`
  color: blue;
  text-decoration: none;
`

const PostListing = ( props ) => {
  return (
    <article>
      <h3><StyledBlogLink to={props.post.fields.slug}>{props.post.frontmatter.title}</StyledBlogLink></h3>
      <p>{props.post.frontmatter.date}</p>
      <p dangerouslySetInnerHTML={{
        __html: props.post.html
      }}></p>
    </article>
  )
}

export default PostListing;
