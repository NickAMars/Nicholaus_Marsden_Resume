import { HeaderStyle, HomeLink, NavItem, NavLink, NavList } from './header.style'
import Home from '@assets/home3.svg'

export const Header: React.FC<{}> = (props) => {
    return (
      <HeaderStyle> 
          <HomeLink to="/">
            <Home fill="purple"/>
          </HomeLink>
          <NavList>
            <NavItem>
              <NavLink to="/resume">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/project">Project</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </NavList>
      </HeaderStyle>
    );
  }