import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.nav`
    height: 5rem;
    background-color: #FFF;
    margin-bottom: 5px;
    display: flex;
`;

const NavList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 60%;
`
const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: inherit;
`
const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  font-weight: 700;
`
const HomeLink = styled(Link)`
  padding-left: 5px;
  display: flex;
  justify-content: center;
`
export {
    HeaderStyle,
    NavList,
    NavItem,
    NavLink,
    HomeLink
}