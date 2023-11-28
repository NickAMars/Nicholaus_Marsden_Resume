import styled from "styled-components";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Resume } from "./resume";
import { Contact } from "./contact";


const DashboardStyle = styled.main`
  height: 70rem;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 2px;
  background-color: ${(props)=> props.theme.palette.secondary.main};
`;

export const Dashboard: React.FC<{}> = (props) => {
    return (
      <DashboardStyle> 
        <Routes>
          <Route path="/" element={<>About</>} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<>Projects</>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </DashboardStyle>
    );
  }