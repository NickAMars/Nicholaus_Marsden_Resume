import { Link } from "react-router-dom";
import styled from "styled-components";


const HeaderStyle = styled.nav`
    height: 5%;
    background-color: orangered;
    margin-bottom: 5px;
`;

export const Header: React.FC<{}> = (props) => {
    return (
      <HeaderStyle> 
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
      </HeaderStyle>
    );
  }