import styled from "styled-components";



const HeaderStyle = styled.div`
    height: 10%;
    background-color: orangered;
    margin-bottom: 5px;
`;

export const Header: React.FC<{}> = (props) => {
    return (
      <HeaderStyle> 
        {"Section for the header"}
      </HeaderStyle>
    );
  }