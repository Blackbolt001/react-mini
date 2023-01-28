import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"


const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display:flex;
`;

const ImgContainer = styled.div`
    flex:1;
    `;

const Image = styled.img`
    width: 100%;
    height:90vh;
    object-fit:contain;
    `;

const InfoContainer= styled.div`
    flex:1;
    padding: 0px 50px;
    `;

const Title = styled.h1`
    font-weight:200;
    `;

const Desc = styled.p`
    margin: 20px 0px;
    `;

const Price = styled.span`
    font-weight: 100;
    font-size:40px;
`;

const FilterContainer=styled.div`
    width:50%;
    margin:30px 0px;
    display:flex; 
    justify-content:space-between;
`;

const Filter = styled.div`
    display:flex;
    align-items:center;
`;

const FilterTitle=styled.span`
      font-size:20px;
      font-weight:200;
`;

const FilterColor=styled.div`
    width:20px;
    height:20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor:pointer;
`;

const FilterSize=styled.select`
    margin-left:10px;
    padding:5px;
    `;

const FilterSizeOption =styled.option``;


const Product = () => {
  return (

   <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
    <ImgContainer>
        <Image src = "https://cdn.dealeraccelerate.com/rkm/1/8065/539553/790x1024/2018-dodge-challenger-srt-demon"/>
    </ImgContainer>
    <InfoContainer>
        <Title> Dodge Challenger</Title>
        <Desc> 
            Feel the rush of the wind as you stare at this car and think, i would rather go on a walk.
        </Desc>
        <Price>50,000$</Price>
        <FilterContainer>
        <Filter>
            <FilterTitle> Color </FilterTitle>
            <FilterColor color="black"/>
            <FilterColor color="darkblue"/>
            <FilterColor color="grey"/>
            <FilterColor color="red"/>
        </Filter> 
        <Filter>
            <FilterTitle> Size </FilterTitle>
            <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
        </Filter>
    </FilterContainer>
    </InfoContainer>
    </Wrapper>
    <Newsletter/>
    <Footer/>
   </Container>
  );
};

export default Product;