import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './containers/HomePage';
import ThemeStyled from "./theme/ThemeStyled";
import styled from "styled-components";
import ThemeMui from "./theme/ThemeMui";


function App() {
  return (
    <AppWrapper>
      <ThemeMui>
        <ThemeStyled>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HomePage />
                  </>
                }
              />
            </Routes>
          </Router>
        </ThemeStyled>
      </ThemeMui>
    </AppWrapper>
  );
}




const IconLink = styled.a`
  margin: 0 15px;
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #0077b5;  // You can change this to the desired hover color
  }
`;



const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100%;
  flex-direction: column;
  font-family: "Inter";
  background-color: #000000;
  >*{
    zoom:1;
  }
`;

export default App;
