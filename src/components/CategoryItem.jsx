import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const Title = styled.h1`
  color: white;
  margin: 20px;
`
const Button = styled.button`
  border: none;
  border-radius: 30px;
  padding: 12px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.5s ease;

  &:hover{
    background-color: lightgray;
    // transform: scale(1.1);
  }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
