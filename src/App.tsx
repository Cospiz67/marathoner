import styled from 'styled-components'
import WorldMap from './components/WorldMap';
import Why from './components/Why';
import Achievements from './components/Achievements';
import { BrowserRouter, Link, Route, Routes } from 'react-router';


const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const HeaderNav = styled.nav`
  background-color: #E0B24A;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  list-style: none;
  padding: 10px 0;
`;
const StyledMain = styled.main`
  background: linear-gradient(
    180deg,
    #EAF2FF 0%,
    #DCEBFF 50%,
    #F6F1E8 100%
  );
  flex: 1;
  width: 100%;
`;
const StyledImg = styled.img`
  width: 40px;
`;
const StyledH1 = styled.h1`
  margin: auto 1%;
  min-width: fit-content;
`;
const LiLeft = styled.li`
  justify-self: start;
  margin-left: 10%;
`;
const LiCenter = styled.li`
  justify-self: center;
`;
const LiRight = styled.li`
  justify-self: end;
  margin-right: 10%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #3c934ae0;
  }
`;
const StyledLinkSpecial = styled(Link)`
  text-decoration: none;
  display:flex;

  &:hover h1{
    color: #3c934ae0;
  }
`;

export default function App() {
  return (
    <BrowserRouter>
      <StyledWrapper>
        <HeaderNav>
          <LiLeft><StyledLink to="/why">Why this project</StyledLink></LiLeft>
          <LiCenter>
              <StyledLinkSpecial to ="/">
                <StyledImg src="/logo.png" alt="icon"></StyledImg>
                <StyledH1>Marathoner: Walk Around The World !</StyledH1>
              </StyledLinkSpecial>
            </LiCenter>
            <LiRight><StyledLink to="/achievements">Achievements</StyledLink></LiRight>
        </HeaderNav>

        <StyledMain>
          <Routes>
            <Route path="/" element={<WorldMap/>} />
            <Route path="/why" element={<Why/>} />
            <Route path="/achievements" element={<Achievements/>} />
          </Routes>
        </StyledMain>
      </StyledWrapper>
    </BrowserRouter>
  )
}