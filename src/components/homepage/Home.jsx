import React from 'react'
import styled from 'styled-components'
import Books from './Books';
import Header from './Header'

function Home() {
    return (
        <>
            <Header />
            <Break />
            <h1>All Books here</h1>
            <Books />
        </>
    )
}

const Break = styled.div`
    height: 8px;
    width: 200px;
    background-color: #FF735D;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export default Home