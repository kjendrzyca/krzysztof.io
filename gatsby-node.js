const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogTemplate = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const blogPosts = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/blog/"  }}
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )
  const notePosts = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/note/"  }}
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (blogPosts.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      blogPosts.errors
    )
    return
  }

  if (notePosts.errors) {
    reporter.panicOnBuild(
      `There was an error loading your notes`,
      notePosts.errors
    )
    return
  }

  const posts = blogPosts.data.allMarkdownRemark.nodes
  const notes = notePosts.data.allMarkdownRemark.nodes

  console.log(posts)
  console.log('===')
  console.log(notes)

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          contentPath: 'blog',
        },
      })
    })
  }

  if (notes.length > 0) {
    notes.forEach((note, index) => {
      const previousPostId = index === 0 ? null : notes[index - 1].id
      const nextPostId = index === notes.length - 1 ? null : notes[index + 1].id

      createPage({
        path: note.fields.slug,
        component: blogTemplate,
        context: {
          id: note.id,
          previousPostId,
          nextPostId,
          contentPath: 'notes',
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
