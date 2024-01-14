import React from "react";
import styled from "styled-components";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/brent-friedman725", "_blank");
    };

    const handleEmailClick = () => {
        window.location.href = "mailto:brentfriedman@berkeley.edu"
    };

    return (
        <FooterWrapper>
            <IconWrapper onClick={handleLinkedInClick}>
                <LinkedInIcon style={{ color: "#33FF33" }} />
            </IconWrapper>
            <IconWrapper onClick={handleEmailClick}>
                <EmailIcon style={{ color: "#33FF33" }} />
            </IconWrapper>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
  padding: 20px 0;
  text-align: center;
  background-color: #000;
  color: #fff;
  font-size: 0.875em;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Footer;
