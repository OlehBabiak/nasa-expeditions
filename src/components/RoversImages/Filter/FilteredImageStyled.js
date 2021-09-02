import styled from "styled-components"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
  justify-items: center;
  row-gap: 20px;

`;

export {
    GridWrapper,
}