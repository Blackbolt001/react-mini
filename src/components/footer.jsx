import { Facebook, GitHub, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components'
import {mobile} from "../responsive";


const Container= styled.div`
    display:flex;
    ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;

const Logo = styled.h1`   
`;
const Desc = styled.p`   
    margin: 20px 0px;
`;
const SocialContainer = styled.div` 
    display: flex;

`;

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color: white;
    background-color: #${(props) =>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;

const Center = styled.div`
  flex:1;
  padding:20px;
  ${mobile({ display: "none" })}
`;

const Title= styled.h3`
    margin-bottom:30px;
`;

const List= styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap: wrap;
    
`;

const ListItem=styled.li`
    width: 50%;
    margin-bottom:10px;
`;


const Right = styled.div`
  flex:1;
  padding:20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display:flex;
    align-items:center;
`;

const Payment = styled.img`
    width:50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>BlackBolt</Logo>
        <Desc>
            this is functional working web page.
        </Desc>
        <SocialContainer>
                <SocialIcon color=' #3b5999'>
                    <Facebook/>
                </SocialIcon>

                <SocialIcon color=' #E4405F'>
                    <Instagram/>
                </SocialIcon>

                <SocialIcon color=' #55A4EE'>
                    <Twitter/>
                </SocialIcon>

                <SocialIcon color=' #0f0f0f'>
                    <GitHub/>
                </SocialIcon>        
        </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>HOME</ListItem>
                <ListItem>CART</ListItem>
                <ListItem>MENS</ListItem>
                <ListItem>WOMENS</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}}/>
           Covington,Georgia
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}}/>
           1-904-210-8619
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/>
            JGOSSETT73@GMAL.COM
        </ContactItem>
        <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  );
};

export default Footer;