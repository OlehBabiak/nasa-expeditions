import styled from "styled-components"
import img from '../../assets/e3bnymw0dca61.jpg'

const HeaderWrapper = styled.header`
  overflow: hidden;
  position: fixed; 
  z-index: 40;
  top: 0; 
  width: 100%;
  height: inherit;
  font-size: 1.47em;
`

const NavigationContent = styled.div`
  width: 1366px;
  margin: 0 auto;
  height: 15vh;
  background-image: url(${img});
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
  grid-template-rows: 1fr;
  
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

const LogoContainer = styled.img`
  position: absolute;
  top: 15%;
  left: 15%;
  bottom: 0;
  right: 0;
  @media (max-width: 414px){
    max-width: 80px;
  }
`;

const DeskTopMenu = styled.div`
  color: floralwhite;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  
  @media (max-width: 767px){
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: grid;
    justify-items: end;
    padding-right: 25px;
  }
   ;
`

export {
    HeaderWrapper,
    LogoContainer,
    NavigationContent,
    MobileMenu,
    DeskTopMenu
}