import React from 'react'
import styled from 'styled-components'

function BookCard(props) {
    return (
        <Card>
            <h1>{props.title}</h1>
            <a href={props.url} target="_blank">Read Book</a>
        </Card>
    )
}

const Card = styled.div`
    width: 250px;
    height: 300px;
    background-color: #c95555;
    margin: 10px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        width: 150px;
        height: 180px;
    }
    & h1{
        font-size: 16px;
    }

`;

export default BookCard