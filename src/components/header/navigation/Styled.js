import styled from "styled-components"

const Container = styled.div`
  width: 1366px;
  margin: 0 auto;
  height: 100%;
  background: black;
  
  @media (max-width: 1030px){
    max-width: 860px;
  }

  @media (max-width: 790px){
    max-width: 700px;
  }

  @media (max-width: 435px){
    max-width: 400px;
  }

  @media (max-width: 380px){
    max-width: 350px;
  }

  @media (max-width: 330px){
    max-width: 300px;
  }
`;


export {
    Container
}