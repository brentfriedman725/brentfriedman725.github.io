import React from 'react';
import styled from 'styled-components';

// Step 3.1: Import the resume preview image
import resumePreviewImage from '../../images/resumePreview.png';

function Resume() {
  // Step 3.3: Function to handle when the resume thumbnail is clicked
  const handleResumeClick = () => {
    // Open the actual resume PDF in a new tab (change the link accordingly)
    window.open('Brent_Friedman_Resume.pdf', '_blank');
  };

  return (
    <ResumeWrapper>
      <ResumeThumbnail src={resumePreviewImage} onClick={handleResumeClick} />
    </ResumeWrapper>
  );
}

const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.2rem;
  text-align: center;
  max-width: 80%;
`;

// Step 3.2: Style the resume thumbnail
const ResumeThumbnail = styled.img`
  width: 700px; // You can set the width to your preference
  margin-top: 2rem;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
  }
`;

export default Resume;
