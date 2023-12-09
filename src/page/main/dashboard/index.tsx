import styled from "styled-components";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Contact } from "./contact";
import { Project } from "./project";
import { About } from "./about";


const DashboardStyle = styled.main`
  /* height: 80rem; */
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 2px;
  background-color: ${(props)=> props.theme.palette.secondary.main};
  overflow-y: auto;

  position: relative;
  z-index:  100;
`;

export const Dashboard: React.FC<{}> = (props) => {
    return (
      <DashboardStyle> 
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </DashboardStyle>
    );
  }