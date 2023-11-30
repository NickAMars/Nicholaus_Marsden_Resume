import { HeaderStyle, HomeLink, NavButton, NavItem, NavLink, NavList } from './header.style'
import Home from '@assets/home3.svg'

export const Header: React.FC<{}> = (props) => {
    return (
      <HeaderStyle> 
          <HomeLink to="/">
            <Home fill="#000"/>
          </HomeLink>
          <NavList>
            <NavItem>
              <NavButton>
                <NavLink to="/resume">Resume</NavLink>
              </NavButton>
            </NavItem>
            <NavItem>
              <NavButton>
                <NavLink to="/project">Project</NavLink>
              </NavButton>
            </NavItem>
            <NavItem>
              <NavButton>
                <NavLink to="/contact">Contact</NavLink>
              </NavButton>
            </NavItem>
          </NavList>
      </HeaderStyle>
    );
  }