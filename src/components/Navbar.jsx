import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <Nav>
            <img src="/images/books.gif" alt="" />
            <h1>Books Store</h1>
        </Nav>
    )
}

const Nav = styled.nav`
    text-align: center;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    & img {
        width: 70px;
        padding-right: 20px;
    }
    & h1 {
        padding-top: 15px;
    }
`;

export default Navbar