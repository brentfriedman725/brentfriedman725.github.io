/**
 *
 * TopMenu
 *
 */

import React, { memo, useEffect } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";



function TopMenu({
  activeTab,
  setActiveTab,
}) {
  const tabs = [
    { name: "home", icon: TwitterIcon, route: "/home" },
    { name: "resume", icon: TwitterIcon, route: "/resume" },
    { name: "projects", icon: TwitterIcon, route: "/projects" },
    { name: "contact", icon: TwitterIcon, route: "/contact" },

  ];

  const firstCapitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const renderMenuItems = () =>
    tabs.map((tab) => {
      

      if (activeTab === tab.name) {
        return (
          <ActiveMenuItem
            variant="contained"
            disableElevation
            onClick={() => {
              if (activeTab === tab.name) return;
              setActiveTab(tab.name);
            }}
            
            key={tab.name}
          >
            {tab.name}
          </ActiveMenuItem>
        );
      }

      return (
        
          <MenuItem
            variant="contained"
            onClick={() => {
              
              setActiveTab(tab.name);
              
            }}
            disableElevation
            
          >
            {tab.name}
          </MenuItem>
      );
    });
  return (
    <Wrapper>
      <Menu>
        <MenuItemWrapper>{renderMenuItems()}</MenuItemWrapper>
      </Menu>
    </Wrapper>
  );
}
// ... [previous imports and functions]

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 27.5px;
  background-color: ${props => props.theme.palette.black}; // Adding black background
  border-bottom: 1px solid ${props => props.theme.palette.primaryTextGreen}; // Make the border green
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 6px;
`;

const MenuItem = styledMui(Button)(({ theme }) => ({
  ...theme.typography.primaryText,
  justifyContent: "center", // Centering text and icon
  width: "250px", // Fixed width for a more structured look
  color: theme.palette.primaryTextGreen,
  textTransform: "uppercase", // Uppercase for that COMMAND feel
  padding: "16px 28px",
  background: "transparent",
  borderRadius: 4,
  border: `2px solid ${theme.palette.primaryTextGreen}`, // Adding a border
  transition: '0.3s', // Smooth transition
  "&:hover": {
    backgroundColor: theme.palette.secondaryTextGreen, // Using the secondary green for hover
    borderColor: theme.palette.secondaryTextGreen, // Border color on hover
    color: theme.palette.black,
  },
  
}));

const ActiveMenuItem = styledMui(MenuItem)(({ theme }) => ({
  backgroundColor: theme.palette.secondaryTextGreen, // Using the secondary green for hover
  borderColor: theme.palette.secondaryTextGreen, // Border color on hover
  color: theme.palette.black,
}));



export default TopMenu;
