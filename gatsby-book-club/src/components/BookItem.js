import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const BookItemWrapper = styled.section`
    
    border: 1px solid #ddd;
    padding: 8px;
    background: white;
    margin-bottom: 8px;
    display: flex;

    h2 {
        small {
            font-size: 14px;
            padding-left: 8px;
            font-weight: normal;
        }
    }
`

const ImageWrapper = styled.div`
    max-width: 200px;

    img {
        max-width: 200px;
    }
`

const ContentWrapper = styled.div`
    flex-grow: 1;
    padding-left: 8px;
`

const BookItem = ({ authorName, bookSummary, bookTitle, bookCover, children }) => {

    return (
        <BookItemWrapper>
            <ImageWrapper>
                <Img fixed={bookCover} />
            </ImageWrapper>
            <ContentWrapper>

                <div>
                    <h2>
                        {bookTitle}<small>{authorName}</small>
                    </h2>
                    <p>
                        {bookSummary}
                    </p>
                    <div>
                        {children}
                    </div>
                </div>
            </ContentWrapper>
        </BookItemWrapper >
    )
}

export default BookItem