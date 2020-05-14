/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


// Generate routes and pages for each book
// Getsby uses Redux under the hood :D

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const bookTemplate = path.resolve('src/templates/bookTemplate.js')

    return graphql(`
        query MyQuery {
            allBook {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    `)
    .then(result => {
        if (result.errors) {
            throw result.errors
        }
        result.data.allBook.edges.forEach(book => {
            createPage({
                path: `/book/${book.node.id}`,
                component: bookTemplate,
                context: {bookId: book.node.id}
            })
        })
    })
}