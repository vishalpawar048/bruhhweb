import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
display: flex;
background: #ea4c89;
justify-content: center;
height:100vh;
flex-direction: column;
align-items:center;
`

const Header = styled.div`
font-size:4rem;
color:#fff;

`

const Messege = styled.div`
display: block;
font-size:2rem;
color:#fff;
margin:25px;
`

const HomePageLink = styled.button`
display: block;
    font-size: 2rem;
    color: aqua;
    background-color: unset;
    border-radius: 8px;
    box-shadow: 5px 10px;
    padding: 10px;

`

const Page404 = () => {
    return (
        <>
        <Container>
            <Header>404</Header>
            <Messege>Page Not Found</Messege>
            <Link to="/">
                <HomePageLink>Back to Home</HomePageLink>
                
                </Link>
        </Container>
        </>

        
    );
        
}

export default Page404
