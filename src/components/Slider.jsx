
   import { ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';
   import {useState} from 'react';
   import styled from 'styled-components';
   import { sliderItems } from '../data';
   import { mobile } from '../responsive';
   
   const Container = styled.div `
        width:100%;
        height:100vh;
        display:flex;
        position:relative;
        overflow:hidden;
        ${mobile({ display: "none"})}
   `;
   
   const Arrow = styled.div`
       width:50px;
       height:50px;
       background-color:transparent;
       border-color: #4970f0;
       border-style: solid;
       border-radius:50%;
       display:flex;
       align-items:center;
       justify-content:center;
       position:absolute;
       top:0;
       bottom:0;
      left:${(props)=>props.direction === "left" && "10px"};
      right:${(props)=>props.direction === "right" && "10px"};
      cursor:pointer;
      margin:auto;
      opacity:0.5;
      z-index:2;
        &:hover{
        background-color: #f5ca79f4;
        border-color: #3a1616;
        transition: all 1.0s ease;
        transform:scale(1.5)}; 
   `;
   
   const Wrapper = styled.div`
       height:100%;
       display:flex;
       transition: all 1.5s ease;
       transform: translateX(${(props)=>props.slideIndex *-100}vw);
   `;
   
   const Slide = styled.div`
       width:100vw;
       height:100vh;
       display:flex;
       align-items:center;
       background-color: #${(props) => props.bg};
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
   const Title = styled.h1`
        opacity:.5;
       font-size:70px;
       font-weight:600;
       color: #4f31f7;
   `;
   const Desc = styled.p`
       margin: 50px 0px;
       font-size:20px;
       font-weight:600;
       letter-spacing: 3px;
       color: #4f31f7;
   `;

   const Button = styled.button`
       padding:10px;
       border-radius:25px;
       font-size:20px;
       background-color: #a0e5dc;
       cursor:pointer;
        &:hover{
        background-color: #4f31f7;
        color: black;
        border:none;
        transition: all 1.0s ease;
        transform:scale(1.5)};
   `;

   const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
   const handleClick = (direction) => {
    if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1:2);
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex +1:0);
    }
   };


     return (
       <Container>
           <Arrow direction="left" onClick={()=>handleClick("left")}>
               <ArrowLeftOutlined/>
           </Arrow>
           <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => ( 
              <Slide bg={item.bg} key={item.id}>
               <ImgContainer>
              <Image src={item.img}/>
              </ImgContainer>
               <InfoContainer>
                   <Title>{item.title}</Title>
                   <Desc> {item.desc}</Desc>
                   <Button>SHOP Now</Button>
               </InfoContainer>
               </Slide>    
            ))}         
           </Wrapper>
           <Arrow direction="right" onClick={()=>handleClick("right")}>
               <ArrowRightOutlined/>
           </Arrow>
           </Container>
     );
   };
   
   export default Slider;
   
   
   