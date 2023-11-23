import styled from "styled-components";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Resume } from "../../resume";


const DashboardStyle = styled.section`
  /* height: 75%; */
  height: 70rem;
  background-color: pink;
  margin-bottom: 5px;
`;

export const Dashboard: React.FC<{}> = (props) => {
    return (
      <DashboardStyle> 
        <Routes>
          <Route path="/" element={<>About</>} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<>Projects</>} />
          <Route path="/contact" element={<>Contact</>} />
        </Routes>
      </DashboardStyle>
    );
  }