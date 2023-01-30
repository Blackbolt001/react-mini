import {  FavoriteBorderOutlined,SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';


const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 1.5s ease;
cursor: pointer;
`;

    const Container = styled.div `
    flex: 1;
  margin: 5px;
  border-radius:20px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #45f8da;
  box-shadow: rgba(78, 63, 63, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;
    const Circle = styled.div`
      width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #eb82d4;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  position: absolute;
`;

    const Image= styled.img`
      height:75%;
      z-index:2;
      `;


    
    const Icon = styled.div`
      width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #8795e7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 1.0s ease;
  &:hover{
    background-color: #f72cb3;
    transform: scale(1.5);
    import {} from 'react-scripts';

  }
`;
    

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product