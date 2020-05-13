import React from 'react'
import Layout from '../components/layout'
import BookItem from '../components/BookItem'
import {graphql} from 'gatsby'

export const query = graphql`
    query BookQuery($bookId: String!) {
        book(id: {eq: $bookId}) {
            author {
                id
                name
            }
            id
            title
            summary
            localImage {
                childImageSharp {
                    fixed(width: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    }
`

const BookTemplate = (props) => {
    return (
        <Layout>
            <BookItem
                authorName={props.data.book.author.name}
                bookSummary={props.data.book.summary}
                bookTitle={props.data.book.title}
                bookCover={props.data.book.localImage.childImageSharp.fixed}
            />
        </Layout>
    )
}

export default BookTemplate