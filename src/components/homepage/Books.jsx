import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BookCard from './BookCard'
import { db } from '../../firebase-config.js'
import { uid } from 'uid'
import { set, ref, onValue } from 'firebase/database'


function Books() {

    const [bookList, setBookList] = useState();

    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
            // console.log(Object.values(data))
            setBookList(Object.values(data))
        })
    }, [])

    return (
        <BooksContainer>
            {/* <button onClick={() => console.log(bookList)}> click</button> */}
            {
                bookList &&
                bookList.map(book => (
                    <BookCard title={book.title} url={book.fileUrl} />
                ))
            }
        </BooksContainer>
    )
}
const BooksContainer = styled.div`
    display: flex ;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px 20px;
`;

export default Books