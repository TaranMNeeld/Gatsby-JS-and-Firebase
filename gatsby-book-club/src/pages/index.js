import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BookItem from '../components/BookItem'
import styled from 'styled-components'

const LinkButton = styled.div`
  text-align: right;

  a {
    padding: 8px;
    background: rebeccapurple;
    color: white;
    border-radius: 8px;
    text-decoration: none;

    &:hover {
      background: indigo;
    }
  }
`

export const query = graphql`
  query MyQuery {
    allBook {
      edges {
        node {
          author {
            id
            name
          }
          id
          title
          summary
          imageURL
        }
      }
    }
  }
`

const IndexPage = (props) => {
  console.log(props)
  return (
    <Layout>
      {props.data.allBook.edges.map(edge => {
        return (<BookItem
          authorName={edge.node.author.name}
          bookSummary={edge.node.summary}
          bookTitle={edge.node.title}
          bookCover={edge.node.imageURL}
          key={edge.node.id}>
          <LinkButton>
            <Link to={`/book/${edge.node.id}`}>
              Join conversation
            </Link>
          </LinkButton>
        </BookItem>)
      })}
    </Layout>
  )
}

export default IndexPage
