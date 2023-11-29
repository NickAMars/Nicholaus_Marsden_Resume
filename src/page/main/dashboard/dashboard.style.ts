import styled from 'styled-components';

const TitleStyle = styled.h1`
    font-size: 1.5rem;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: ${(props)=> props.theme.palette.primary.main};
    padding-bottom: 2rem;
`
const LabelStyle = styled.h3`
    font-size: 1.3rem;
    display: inline;
    margin-right: 0.5rem;
`; 
const ParagraphStyle = styled.p`
    display: inline;
    margin-left: 0.5rem;
`; 
const GroupContentStyle = styled.div`
    padding: 1rem 0;
`; 

export {

    TitleStyle,
    LabelStyle,
    ParagraphStyle,
    GroupContentStyle
}