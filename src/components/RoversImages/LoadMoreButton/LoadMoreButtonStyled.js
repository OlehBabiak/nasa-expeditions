import styled from "styled-components"

const ButtonWrapper = styled.div`
  margin-top: 2vh;
  margin-bottom: 5vh;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
  @media (max-width: 767px) {
    width: 260px;
  }
`

export {
    ButtonWrapper,
}