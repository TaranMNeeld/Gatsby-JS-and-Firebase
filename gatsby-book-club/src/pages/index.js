import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query MyQuery {
    allBook {
      edges {
        node {
          author {
            id
            name
          }
          title
          summary
        }
      }
    }
  }
`

const IndexPage = (props) => {
  console.log(props)
  return (
    <Layout>

  </Layout>
  )
}

export default IndexPage
