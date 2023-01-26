import { Facebook, GitHub, Instagram, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
    display:flex;
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;

const Logo = styled.h1`   
`
const Desc = styled.h1`   
`
const SocialContainer = styled.div`   
`
const SocialIcon = styled.div`
`
const Center = styled.div`
  flex:1;
`
const Right = styled.div`
  flex:1;
`

const footer = () => {
  return (
    <Container>
        <Left>
        <Logo>GOOSE</Logo>
        <Desc>
            this is a mock up for an online E-Commerce full Stack Web Site.
        </Desc>
        <SocialContainer>
            <SocialIcon>
                <Facebook/>
            </SocialIcon>
            <SocialIcon>
                <Instagram/>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon>
                    <GitHub/>
                </SocialIcon>
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>

        </Center>
        <Right>

        </Right>

    </Container>
  )
}

export default footer