import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
    height: 40px;
    width: 50%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px slid lightgray;
    ${mobile({ width: "80%" })}
`
const Input = styled.input`
    width: 100%;
    border: none;
    flex: 9;
    padding-left: 20px;
    font-size: 18px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Your E-mail" />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
