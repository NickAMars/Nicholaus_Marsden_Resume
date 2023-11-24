import styled from "styled-components";



const FooterStyle = styled.section`
    height: 3rem;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;
const ParagraphStyle = styled.span`
  padding-right: 1rem;
`;
const NameStyle = styled.i`
  text-decoration: underline;
  cursor: pointer;
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