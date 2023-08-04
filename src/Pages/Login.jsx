import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://www.pmindia.gov.in/wp-content/uploads/2023/08/H20230802136222.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({ width:"74%" })}
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0 ;
    padding: 12px;
    font-size: 15px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    // margin: auto;
    transition: all 0.5s ease;

    &:hover{
        background-color: #004949;
    }
`;

const Link = styled.a`
    margin: 5px ;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DO YOU REMEMBER YOUR PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
