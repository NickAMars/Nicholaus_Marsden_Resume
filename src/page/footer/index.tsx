import styled from "styled-components";



const FooterStyle = styled.section`
    height: 5%;
    background-color: green;
`;

export const Footer: React.FC<{}> = (props) => {
    return (
      <FooterStyle> 
        {"Footer section display"}
      </FooterStyle>
    );
  }