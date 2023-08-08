import React from 'react';
import styled from 'styled-components';
import ReactTyped from "react-typed";

function Home({setActiveTab}) {
  return (
    <HomeWrapper>
      <ProfileImage src="/prof_pic.jpg" alt="Your Name" />
      <Title>HELLO, I'M BRENT</Title>
      <Subtitle>JUNIOR EECS STUDENT @ UC Berkeley</Subtitle>
      <Description>
        <ReactTyped strings={[
          "Harnessing the power of code to solve real-world problems.",
          "Believer in lifelong learning and continuous growth.",
          "I am passionate about blockchain solutions.",
          "When I'm not coding, I'm exploring the latest in tech innovations.",
          "Bridging the gap between humans and machines with empathy and understanding.",
          "From raw data to actionable insights, transforming challenges into solutions.",
          "Explore my journey, skills, and the projects I've worked on.",
          "In the heart of Silicon Valley, where ideas turn into reality.",
          "Join me in shaping the future of technology.",
          "Let's build something amazing together."
        ]}

         typeSpeed={50} loop />
      </Description>
      <CTAButton href="#projects" onClick={() => {setActiveTab("projects")}}>View My Work</CTAButton>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.palette.secondaryTextGreen};
  font-size: 2.5rem;
  font-family: ${props => props.theme.typography.primaryText.fontFamily};
  font-weight: ${props => props.theme.typography.primaryText.fontWeight};
  font-style: ${props => props.theme.typography.primaryText.fontStyle};
  line-height: ${props => props.theme.typography.primaryText.lineHeight};
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.palette.secondaryTextGreen};
  font-size: 1.5rem;
  font-family: ${props => props.theme.typography.secondaryText.fontFamily};
  font-weight: ${props => props.theme.typography.secondaryText.fontWeight};
  font-style: ${props => props.theme.typography.secondaryText.fontStyle};
  line-height: ${props => props.theme.typography.secondaryText.lineHeight};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${props => props.theme.palette.primaryTextGreen};
  font-size: 1.2rem;
  font-family: ${props => props.theme.typography.secondaryText.fontFamily};
  text-align: center;
  max-width: 80%;
  margin-bottom: 2rem;
  // No need for the typing animation if you're using ReactTyped.
`;

const CTAButton = styled.a`
  background-color: ${props => props.theme.palette.accentColor};
  color: ${props => props.theme.palette.black};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-family: ${props => props.theme.typography.secondaryText.fontFamily};
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.palette.headerGreen};
  }
`;



// ... other code



export default Home;
