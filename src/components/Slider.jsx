import { ArrowLeftOutlined, ArrowRight, ArrowRightAltOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
width:100%;
height:100vh;
display:flex;
position:relative;
background-color:coral;

`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color: #fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
   left:${(props)=>props.direction === "left" && "10px"};
   right:${props=>props.direction === "right" && "10px"};
   cursor:pointer;
   margin:auto;
   opacity:0.5;
`;

const Wrapper = styled.div`
    height:100%;
`;

const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
`;
const ImgContainer = styled.div`
    height:100%;
    flex:1;
`;
const Image = styled.img`
    height:80%;
`;
const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`;
const Title = styled.h1``;
const Description = styled.p``;
const Button = styled.button``;





const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>
            <ImgContainer>
           <Image src="https://www.pngplay.com/wp-content/uploads/6/Funny-Donkey-Transparent-PNG.png"/>
           </ImgContainer>
            <InfoContainer></InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRight/>
        </Arrow>
        </Container>
  )
}

export default Slider