import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import {mobile} from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: #8f8be7;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    `;

const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
    color:#93d5e9ee;
    &:hover{ 
  color: #1d07df;
  opacity:1;
  transform:scale(1.2);
  transition: all .7s ease;
  background-color:transparent;
}
`;

const Desc = styled.div`
    font-size:24px;
    margin-bottom:20px;
    font-weight:300;
    ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color: white;
    display:flex;
    border-radius:15px;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`;

const Input = styled.input`
    border:none;
    flex: 8;
    padding-left:40px;
    background-color: #b0c7e9;
    border-radius:15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    &:hover{ 
  background-color: #e2e2f1;
  color: black;
  opacity:.8;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transform:scale(1.2);
  transition: all .5s ease;
  }
`;

const Button = styled.button`
    flex:1.2;
    border:none;
    background-color: teal;
    color: white;
    border-radius:15px;
    &:hover{ 
  background-color: #6969f0;
  color: black;
  opacity:.8;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transform:scale(1);
  transition: all .5s ease;
    }

`;

const Newsletter = () => {
  return (
    <Container>
        <Title>NEWS</Title>
        <Desc>FIND OUT WHAT YOUR LOCAL WEB DEVELOPER IS DOING FOR YOU</Desc>
        <InputContainer> 
        <Input placeholder='Your email'/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  );
};

export default Newsletter;