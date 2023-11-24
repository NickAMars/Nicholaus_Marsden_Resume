import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const btnTrigger = keyframes`
	0% {
		transform: scale(0.95);
    background-color: #ffAE42;
	}
	70% {
		transform: scale(1);
	}
	100% {
		transform: scale(0.95);
	}
`

const HeaderStyle = styled.nav`
    height: 7rem;
    background-color: ${(props)=> props.theme.light.secondary};
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

  &:hover {
    animation: ${btnTrigger}  1s ease-out 0s 1;
  }
`
const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  background-color: ${(props)=> props.theme.light.primary};
`

export {
    HeaderStyle,
    NavList,
    NavItem,
    NavLink,
    HomeLink
}