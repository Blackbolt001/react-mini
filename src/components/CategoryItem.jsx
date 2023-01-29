import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
flex:1;
margin:3px;
height:50vh;
position: relative;
border-radius:25px;
`;

const Image = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius:20px;
  ${mobile({ height: "20vh" })}

  
`;
const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const Title = styled.h1`
color: #c54bebed;
border-radius:20px;
font-weight:600;
font-size:50px;
opacity:.8;
&:hover{ 
  color: #1d07df;
  opacity:1;
  transform:scale(1.2);
  transition: all .7s ease;
  background-color:transparent;
}
`;

const Button = styled.button`
border: none;
padding:10px;
border-radius:15px;
background-color: transparent;
color: transparent;
cursor: pointer;
font-weight: 600;
&:hover{ 
  background-color: #e2e2f1;
  color: black;
  opacity:.8;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transform:scale(1.2);
  transition: all .5s ease;
}
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
        <Title>{item.title}</Title>
        <Button>Start your Adventure Here</Button>
        </Info>
    </Container>
  );
};

export default CategoryItem;