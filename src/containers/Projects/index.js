import React, { useState } from 'react';
import styled, {createGlobalStyle } from 'styled-components';
import Slider from 'react-slick'; // <-- Import the Slider component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projectData = [
  {
    title: "Gitlet",
    description: "Gitlet is a recreation of the known-and-loved version control system, Git.  This project, programmed in Java, implements all of the features of Git: local and remote repositories, branches, commits, merges,  commit checkouts, branch checkouts, and more. Persistence, serialization, hashing, and file manipulation are just a few of the concepts that I enjoyed through this project. The TreeMap data structure was utilized to not only track commits, but also do so in optimal time.",
    image: "/gitIcon.png",
    gif: "/gitlet_start.png",
    repo: "https://github.com/brentfriedman725/git-project"
  },
  {
    title: "Parking Meters",
    description: "This project utilizes real-time data via the LADOT public database and geocoding to show a map of all available parking meter spots at any location in Los Angles at any given time. Users submit an address, and the program returns a map with all vacant parking meters in a 1km radius. It is also possible to see a map of all parking meters in Los Angeles.",
    image: "/parking.png",
    gif: "/parkingDemo.gif",
    repo: "https://github.com/brentfriedman725/parking-meters"
  },
  {
    title: "Cars!",
    description: "Cars! Is a web application developed on a MERN stack that features user registration and authentication via JWTauth tokens and administrative real-time data input using GraphQL. Users can filter car details by make, model, and trim and see all available data for said car.",
    image: "/cars.png",
    gif: "/carDemoGif.gif",
    repo: "https://github.com/brentfriedman725/carProjectClient"
  },
  {
    title: "Ataxx AI",
    description: "Ataxx is two player strategy board game played on a 7x7 board. Players alternate turns either jumping or extending pieces to capture the opponent's pieces. Utilizing the object-oriented nature of Java, this project incorporates stacks and arraylists to develop command-line and GUI versions of Ataxx with optimized time complexity. For single-player mode, a strong AI is implemented using game trees and alpha-beta pruning algorithms.",
    image: "/ataxx.jpg",
    gif: "/ataxxGif.gif",
    repo: "https://github.com/brentfriedman725/strategy-game"
  },
  
];

const GlobalStyles = createGlobalStyle`
.slick-slide > div {
  display: grid;
  place-items: center;
  width: 80%;
  margin-top: 0px;
  margin: auto;
  height: 500px;
  padding: 0px;
  
}


`;

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode:true,
    pauseOnHover: true,
    onEdge: false,
    centerPadding: '60px'
  };

  return (
    <>
    <GlobalStyles />
    <ProjectsWrapper>
      <Title>MY PROJECTS</Title>
      
      
        <Slider {...sliderSettings}>
      
        {projectData.map(project => (
          <ProjectCard key={project.title}>
            <ProjectImage 
              src={project.image} 
              alt={project.title}
              onClick={() => setSelectedProject(project)}
            />
            <ProjectTitle>{project.title}</ProjectTitle>
          </ProjectCard>
        ))}

        </Slider>
    
      
      {selectedProject && (
        <Modal>
          <CloseButton onClick={() => setSelectedProject(null)}>X</CloseButton>
          <h2>{selectedProject.title}</h2>
          <img src={selectedProject.gif} alt={selectedProject.title} />
          <p>{selectedProject.description}</p>
          <a href={selectedProject.repo}>Repo Link</a>
        </Modal>
      )}
    </ProjectsWrapper>
    </>
  );
}


const ProjectCard = styled.div`
  width: 300px; // set a fixed width
  height: 450px; // set a fixed height
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.3s;
  cursor: pointer;
  overflow: hidden; // hide any content that exceeds the card's dimensions

  &:hover {
    transform: scale(1.05);
  }
`;


const ProjectTitle = styled.h2`
  font-size: 1.2rem;
  margin-top: 10px;
  color: ${props => props.theme.palette.primaryTextGreen};
  text-align: center;
  max-width: 280px; // Prevent overflow
`;



const ProjectsWrapper = styled.div`
    position: relative;
    padding: 20px;
    overflow-x: visible;
    overflow-y: visible;
    width: 100%;
    max-width: 1200px;
    margin:40px;

    .imageWrapper {
      width: 100%;               // Ensure the wrapper takes up full width
      display: flex;
      justify-content: center;  // Horizontally center the child
      align-items: center;      // Vertically center the child
      height: 100%;             // Fill the height of the carousel slide
    }
`;


const Title = styled.h1`
    color: ${props => props.theme.palette.primaryTextGreen};
    font-size: 2.5rem; // <-- Increase this value to make the text bigger
    font-family: ${props => props.theme.typography.secondaryText.fontFamily};
    text-align: center;
    margin-top: 2rem;  // <-- Adjust top margin if needed
    margin-bottom: 2rem;
`;




const ProjectImage = styled.img`
  width: 260px;        // Set explicit width for the image
  height: 260px;       // Set explicit height for the image
  object-fit: cover;   // Ensure the image covers the entire dimensions
  display: block;
  cursor: pointer;
  margin-left: 10px;
  transition: transform 0.3s;
  border-radius: 20px; // Rounded edges
  margin-top: 20px;    // Set margin for consistent placement
  margin-bottom: 20px; // Adjust if needed based on your design requirements
  align-self: center;  // Horizontally center the image in the card

  &:hover {
    transform: scale(1.05);
  }
`;


const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  padding: 20px;
  width: 80vw;
  max-height: 80vh;
  overflow: hidden;
  z-index: 1000;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);

  img {
    width: 400px; 
    height: 400px;
    object-fit: contain; 
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2, img, p, a {
    margin: 10px 0; // Previously added for spacing
  }

  h2, p, a { // <-- Target the text elements you want to style
    color: ${props => props.theme.palette.primaryTextGreen};
    font-family: ${props => props.theme.typography.secondaryText.fontFamily};
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;



const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

// ... rest of your styled components

export default Projects;
