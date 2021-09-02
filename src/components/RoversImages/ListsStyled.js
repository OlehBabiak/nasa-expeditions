import styled from "styled-components"

const ImageListWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 15vh;
`;

const LoaderWrapper = styled.div`
  margin-top: 20vh;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
`

export {
    ImageListWrapper,
    LoaderWrapper
}