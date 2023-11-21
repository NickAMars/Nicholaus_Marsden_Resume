import styled from "styled-components";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


const DashboardStyle = styled.section`
  height: 75%;
  background-color: pink;
  margin-bottom: 5px;
`;

export const Dashboard: React.FC<{}> = (props) => {
    return (
      <DashboardStyle> 
        <Routes>
          <Route path="/" element={<>About</>} />
          <Route path="/project" element={<>Projects</>} />
          <Route path="/contact" element={<>Contact</>} />
        </Routes>
      </DashboardStyle>
    );
  }