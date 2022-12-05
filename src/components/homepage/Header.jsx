import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Main>
            <div>
                <h1>No Login!</h1>
                <h1>No SignUp!</h1>
                <h3>Just Enjoy and Study..</h3>
            </div>
            <img src="/images/hero.gif" alt="img" />
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 500px;
    @media (max-width: 768px) {
        flex-direction: column;
        height: 600px;
    }
    & img{
        width: 30%;
        @media (max-width: 768px) {
        width: 60%;
    }
    }
    & div > h1{
        color: #FF735D;
        font-size: 55px;
        padding-bottom: 40px;
    }
    & div > h3{
        font-size: 30px;
    }
`;

export default Header