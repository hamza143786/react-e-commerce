import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color: teal;  
    color: white;
    display: flex;
    justify-content: center;
    align-items:cenetr;
    font-size: 14px;
    font-weight: 500;
    padding-top: 4px;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over 500Rs.
    </Container>
  )
}

export default Announcement
