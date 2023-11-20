import styled from "styled-components";



const DashboardStyle = styled.section`
  height: 70%;
  background-color: pink;
  margin-bottom: 5px;
`;

export const Dashboard: React.FC<{}> = (props) => {
    return (
      <DashboardStyle> 
        {"Dashboard section display"}
      </DashboardStyle>
    );
  }