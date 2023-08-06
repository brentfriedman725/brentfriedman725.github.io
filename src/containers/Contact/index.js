// containers/Contact.js

import React from 'react';
import styled from 'styled-components';

function Contact() {
  return (
    <ContactWrapper>
      <Title>Welcome to the Dashboard</Title>
      <Description>
        This is the Contact page. Navigate through the tabs to access different sections.
      </Description>
      {/* You can add more content/components here */}
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
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

export default Contact;
