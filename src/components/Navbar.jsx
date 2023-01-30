import React from 'react'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import {Badge} from '@material-ui/core/';
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
    height: 60px;
    background:url("https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
    ${mobile({ height: "50px"})};

`;
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px"})};
`;

const Left = styled.div`
  flex:1;
  display:flex; 
  align-items:center;
  `;

  const Language = styled.span`
    font-size:14px;
    cursor: pointer;
    ${mobile({ display: "none" })}

  `;

  const SearchContainer = styled.div`
  border:0.5px solid lightgray;
  display:flex; 
  align-items: center;
  margin-left:25px;
  padding:5px;
  border-radius:20px;
  background-color: #f8f8f8;
  `;

  const Input = styled.input`
  border:none;
  border-radius:20px;
  ${mobile({ width: "50px" })}
   `;

const Center = styled.div`
  flex:1;
  text-align:center;
  `;

  const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}

  `;

const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
  `;

  const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  `;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style = {{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>JOE's</Logo>
          </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlined />
    </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;