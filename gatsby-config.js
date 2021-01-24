module.exports = {
  siteMetadata: {
    title: `Blog by Jason P Kovalski`,
    name: `JPK Blog`,
    siteUrl: `https://jasonpkovalski.me`,
    description: `A blog about technology, finance, and more.`,
    hero: {
      heading: `A blog about technology, finance, and more.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/grim_ssbu`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/jk1.618`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jasonkovalski`,
      },
      {
        name: `github`,
        url: `https://github.com/jasonpkovalski`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog by Jason P Kovalski`,
        short_name: `JPK Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
