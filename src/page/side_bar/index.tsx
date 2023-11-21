import styled from "styled-components";



const SideBarStyle = styled.div`
  width: 25%;
  height: 85%;
  background-color: gold;
  margin-right: 5px;
  padding-bottom: 10px
`;

export const SideBar: React.FC<{}> = (props) => {
    return (
      <SideBarStyle> 
        {"Section for the side bar"}
      </SideBarStyle>
    );
  }