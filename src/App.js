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
