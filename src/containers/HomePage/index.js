/**
 *
 * Dashboard
 *
 */

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";


import styled from "styled-components";
import Home from "../Home";
import Resume from "../Resume";
import Projects from "../Projects";
import Contact from "../Contact";
import TopMenu from "../../components/TopMenu";
import Footer from "../../components/Footer";

export function HomePage() {

  const [activeTab, setActiveTab] = useState("home");
 
  return (
    <DashboardWrapper>
      <Helmet>
        <title>Brent Friedman</title>
        <meta name="description" content="Description of Dashboard" />
        <link rel="icon" href="/favicon.ico?" />
      </Helmet>
      <AppContent className="container-fluid">
        <TopMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Content>
          {activeTab === "home" && <Home setActiveTab={setActiveTab}/>}
          {activeTab === "resume" && <Resume />}
          {activeTab === "projects" && <Projects />}
          
          
        </Content>
        <Footer />
      </AppContent>
    </DashboardWrapper>
  );
}


const DashboardWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px 40px;
  position: relative;
`;


const AppContent = styled.section`
  display: flex;
  width: 100%;
  height: 100%; 
  flex-direction: column;
`;




export default HomePage;
