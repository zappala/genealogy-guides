/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    sideBar: [
      {
        name: 'Getting Started', prefix: 'getting-started',
        links: [
          {
            title: "Welcome",
            link: '/welcome'
          },
          {
            title: 'Why genealogy',
            link: '/why-genealogy'
          },
          {
            title: 'Ways to get involved',
            link: '/ways-to-get-involved'
          },
          {
            title: 'Useful accounts',
            link: '/useful-accounts'
          }
        ]
      },
      {
        name: 'United States Census', prefix: 'us-census',
        links: [
          {
            title: '1940 to 1900',
            link: '/united-states-census-1940-to-1900'
          },
          {
            title: '1880 to 1850',
            link: '/united-states-census-1880-to-1850'
          },
        ]
      },
      {
        name: 'Immigration to the US', prefix: 'us-immigration',
        links: [
          {
            title: 'Immigration to the United States',
            link: '/immigration-to-the-united-states'
          }
        ]
      },
      {
        name: 'Italian Genealogy', prefix: 'italian',
        links: [
          {
            title: 'Introduction',
            link: '/introduction'
          },
          {
            title: 'Making the jump',
            link: '/making-the-jump'
          },
          {
            title: 'Birth records',
            link: '/birth-records'
          },
          {
            title: 'Marriage records',
            link: '/marriage-records'
          }
        ]
      }
    ]
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-images-medium-zoom` // Important!
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {}
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `guides`,
        path: `${__dirname}/src/guides`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
        ],
        display: 'swap'
      }
    }
  ],
}
