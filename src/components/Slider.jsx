
   import { ArrowLeftOutlined, ArrowRightOutlined, } from '@material-ui/icons';
   import React from 'react';
   import styled from 'styled-components';
   
   
   const Container = styled.div `
   width:100%;
   height:100vh;
   display:flex;
   position:relative;
   background-color:Bisque;
   overflow:hidden;
   
   `;
   
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
      left:${props=>props.direction === "left" && "10px"};
      right:${props=>props.direction === "right" && "10px"};
      cursor:pointer;
      margin:auto;
      opacity:0.5;
   `;
   
   const Wrapper = styled.div`
       height:100%;
       display:flex;
       transform:translateX(-200px);
   `;
   
   const Slide = styled.div`
       width:100vw;
       height:100vh;
       display:flex;
       align-items:center;
   `;
   const ImgContainer = styled.div`
       height:100%;
       width:50%;
       flex:1;
   `;
   const Image = styled.img`
       height:80%;
   `;
   const InfoContainer = styled.div`
       flex:1;
       padding:50px;
   `;
   const Title = styled.h1`
       font-size:70px;
       color:DarkOrange;
   `
   const Desc = styled.p`
       margin: 50px 0px;
       font-size:20px;
       font-weight:500;
       letter-spacing: 3px;
       color:coral;
   `
   const Button = styled.button`
       padding:10px;
       font-size:20px;
       background-color:chocolate;
       opacity:.8;
       cursor:pointer;
      
   `
   
   
   
   
   
   const Slider = () => {
   
   
       
   
     return (
       <Container>
           <Arrow direction="left">
               <ArrowLeftOutlined/>
           </Arrow>
           <Wrapper>
              <Slide background-color="f5fafd">
               <ImgContainer>
              <Image src="https://www.pngplay.com/wp-content/uploads/13/Forest-Background-PNG.png"/>
              </ImgContainer>
               <InfoContainer>
                   <Title>Joe's Online Summer Sale</Title>
                   <Desc> Buy Local, Shop Local</Desc>
                   <Button>SHOP Now</Button>
               </InfoContainer>
               </Slide> 
               <Slide background-color="fcf1ed">
               <ImgContainer>
              <Image src="https://www.pngplay.com/wp-content/uploads/13/Forest-Background-PNG.png"/>
              </ImgContainer>
              <InfoContainer>
                  <Title>Winter Sale</Title>
                   <Desc> Buy Local, Shop Local</Desc>                
              <Button>SHOP Now</Button>
               </InfoContainer>
               </Slide> 
               <Slide background-color="fbf0f4">
               <ImgContainer>
              <Image src="https://www.pngplay.com/wp-content/uploads/13/Forest-Background-PNG.png"/>
              </ImgContainer>
               <InfoContainer>
                   <Title>Selling Fast</Title>
                   <Desc> Buy Local, Shop Local</Desc>
                   <Button>SHOP Now</Button>
               </InfoContainer>
               </Slide>               
           </Wrapper>
           <Arrow direction="right">
               <ArrowRightOutlined/>
           </Arrow>
           </Container>
     )
   }
   
   export default Slider
   
   
   