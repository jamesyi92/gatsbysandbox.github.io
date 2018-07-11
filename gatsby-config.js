module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'A New Site'
  },
  pathPrefix: "/gatsbysandbox",
  plugins: [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/src/posts/`
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'img',
      path: `${__dirname}/src/images`
    }
  },
  'gatsby-transformer-remark',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp'
  ]
};
