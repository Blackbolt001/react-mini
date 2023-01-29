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

const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
`;

const Info=styled.div`
    flex:3;
`;

const Product=styled.div`
    display:flex;
    justify-content:space-between;
`;

const ProductDetail=styled.div`
    flex:2;
`

const Image=styled.img`
    width:200px;
    `;

const Details=styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;

`;

const ProductName=styled.span``

const ProductID=styled.span``

const ProductColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${(props) => props.color};

    `;

const ProductSize=styled.span``

const PriceDetail=styled.span`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    `;

const Summary=styled.h1`
    flex:1;
`;


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Items</Title>
            <Top>

                <TopButton>Add More Items</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your WishList</TopText>
                </TopTexts>
                <TopButton type="filled">Checkout</TopButton>

            </Top>
            <Bottom>

                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://www.pngkey.com/png/detail/124-1245282_sad-dog-png-clipart-royalty-free-stock-sad.png"/>
                            <Details>
                            <ProductName><b>Product:</b>HARPERS BAZAAR</ProductName>
                            <ProductID><b>ID:</b> <b> 01234567890</b></ProductID>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size</b><b> 50</b></ProductSize>
                            </Details>
                        </ProductDetail>
                        <ProductDetail>
                            <PriceDetail>
                                price
                            </PriceDetail>
                        </ProductDetail>

                    </Product>
                </Info>
                <Summary>summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer/>

    </Container>
  );
};

export default Cart;