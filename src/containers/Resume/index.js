// containers/Resume.js

import React from 'react';
import styled from 'styled-components';

function Resume() {
  return (
    <ResumeWrapper>
      <Title>Welcome to the Dashboard</Title>
      <Description>
        This is the Resume page. Navigate through the tabs to access different sections.
      </Description>
      {/* You can add more content/components here */}
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

export default Resume;
