import React from 'react'
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"


const Container=styled.div``

const Wrapper=styled.div`
    padding:20px;
`;

const Title=styled.h1`
    font-weight:300;
    text-align:center;
`;

const Top=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const TopButton=styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border: ${(props) => props.type === "filled" &&"none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" &&"white"};

`;

const TopTexts=styled.div``

const TopText=styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin: 0px 10px;
`;

const Bottom=styled.div``


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Items</Title>
            <Top>

                <TopButton type="filled">Add More Items</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your WishList</TopText>
                </TopTexts>
                <TopButton type="filled">Checkout</TopButton>

            </Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer/>

    </Container>
  );
};

export default Cart;