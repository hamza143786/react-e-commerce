import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Info = styled.div`
    opacity: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fafd;
    position: relative;
    ${mobile({ flexDirection: "column" })}

    &:hover ${Info}{
        opacity: 1;
}
`

const Circle = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 1;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    cursor: pointer; 
    transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`

const Product = ({item}) => {
  return (
    <Container >
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container >
  )
}

export default Product
