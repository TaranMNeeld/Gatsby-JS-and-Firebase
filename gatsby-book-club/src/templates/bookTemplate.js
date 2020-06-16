import React, { useContext } from 'react'
import Layout from '../components/layout'
import BookItem from '../components/BookItem'
import {graphql} from 'gatsby'
import {BookComments} from '../components/BookComments'
import {FirebaseContext} from '../components/Firebase/context'

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
    
    const {firebase} = useContext(FirebaseContext)

    console.log(firebase)

    return (
        <section>
            <BookItem
                authorName={props.data.book.author.name}
                bookSummary={props.data.book.summary}
                bookTitle={props.data.book.title}
                bookCover={props.data.book.localImage.childImageSharp.fixed}
            />
            {!!firebase &&
                <BookComments firebase={firebase} bookId={props.data.book.id}/>
            }
        </section>
    )
}

export default BookTemplate