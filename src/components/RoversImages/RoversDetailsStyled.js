import styled from "styled-components"

const DetailWrapper = styled.div`
width: 100%;    
  color: aliceblue;
  margin-top: 20vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  align-items: stretch;
  @media (max-width: 435px){
    justify-items: left;
  ;
`

const ContentWrapper = styled.div`
padding: 10px;
`


export {
    DetailWrapper,
    ContentWrapper,
}

