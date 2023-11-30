import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";


const HeaderStyle = styled.nav`
    height: 7rem;
    background-color:${(props)=> props.theme.palette.secondary.main};
    margin-bottom: 5px;
    display: flex;
    border-radius: 5px;
    overflow: hidden;
`;

const NavList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 50%;
`
const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: inherit;
`
const NavButton = styled(Button)`
  display: flex;
  align-items: center;
  height: inherit;
`
const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  align-self: stretch;
  
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  font-weight: 700;
  color: #000;
  transition: all .45s ease-Out;
  padding-left: 2rem;
  padding-right: 2rem;
`
const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  background-color: ${(props)=> props.theme.palette.primary.main};
`

export {
    HeaderStyle,
    NavList,
    NavItem,
    NavLink,
    NavButton,
    HomeLink
}