import { Typography } from "@mui/material";
import styled from "styled-components";



const FooterStyle = styled.section`
    height: 3rem;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;
const ParagraphStyle = styled(Typography)`
  padding-right: 1rem;
  font-size: 1.2rem;
`;
const NameStyle = styled.i`
  text-decoration: underline;
  cursor: pointer;
  font-weight: 900;
`;
export const Footer: React.FC<{}> = (props) => {
    return (
      <FooterStyle> 
        <ParagraphStyle>
          {"Built by"} <NameStyle>Nicholaus A Marsden</NameStyle>
        </ParagraphStyle>
      </FooterStyle>
    );
  }