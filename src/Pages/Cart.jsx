import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};

    &:hover{
        background-color: ${props=>props.type === "filled" ? "#2d2d2d" : "transparent"};
    }
`;

const TopTexts = styled.div`
${mobile({ display: "none"})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    // align-items: center;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})}

`;

const Info = styled.div`
    flex: 3;
`;


const Product =styled.div`;
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})}
`;

const ProductDetail =styled.div`;
    flex: 2;
    display: flex;
`;

const Image =styled.img`;
    width: 200px;
`;

const Details =styled.div`;
    padding: 20px;
    display: flex;
    font-size: 18px;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 20px;
`;

const ProductName =styled.span`;
   
`;

const ProductId =styled.span`;

`;

const ProductColor =styled.div`;
    height: 20px;
    width: 20px;
    border: 2px solid gray;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ProductSize =styled.span`;

`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px"})}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
    ${mobile({ marginBottom: "20px"})}
`;

const Hr = styled.hr`
    background-color: #eee;
    height: 1px;
    border: none;
`;

const Summary = styled.div`
    display:flex;
    flex-direction: column;
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 60vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
    
`;

// const SummaryItemPrice = styled.span`
    
// `;

const Button = styled.button`
   width: 100%;
   padding: 10px;
   background-color: black;
   color: white;
   font-weight: 600;
   cursor: pointer;

   &:hover{
    background-color: #101010;
   }
`;




const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>

            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                            <Details>
                                <ProductName><b>Product:</b> SHYSHTUMM SHOES </ProductName>
                                <ProductId><b>ID:</b> #98901111</ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>Size:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>Rs.2000</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image  src="https://png.pngitem.com/pimgs/s/84-846795_nike-mamba-kobe-rage-jordan-12-flu-game.png" />
                            <Details>
                                <ProductName><b>Product:</b> JOORDAAAN SHOES </ProductName>
                                <ProductId><b>ID:</b> #6969696</ProductId>
                                <ProductColor color="#d34e51" />
                                <ProductSize><b>Size:</b> UK 32</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>1</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>Rs.18000</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal:</SummaryItemText>
                        <SummaryItemText>Rs.20000</SummaryItemText>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping:</SummaryItemText>
                        <SummaryItemText>Rs.100</SummaryItemText>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount:</SummaryItemText>
                        <SummaryItemText>- Rs.100</SummaryItemText>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total:</SummaryItemText>
                        <SummaryItemText>Rs.20000</SummaryItemText>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
