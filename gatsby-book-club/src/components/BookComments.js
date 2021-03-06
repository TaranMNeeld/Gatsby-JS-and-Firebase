import React, {useEffect} from 'react'

export const BookComments = ({firebase, bookId}) => {
    
    useEffect(() => {
        const unsubscribe = firebase.subscribeToBookComments({
            bookId,
            onSnapShot: (snapshot) => {
                console.log(snapshot)
            }
        })

        return () => {
            if(unsubscribe) {
                unsubscribe()
            }
        }
    }, [])
    
    return (
        <div>
            test
        </div>
    )
}