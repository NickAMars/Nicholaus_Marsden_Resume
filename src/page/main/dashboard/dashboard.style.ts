import styled from 'styled-components';

const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    margin-top: 2rem;
`
const ContactDataContainer = styled.div`
    display: flex;
    height: 34rem;
    padding-bottom: 1rem;
`
const ContactFormContainer = styled.div`
    flex: 1;
    /* background-color: pink; */
    padding: 0.5rem;
`
const ContactInfoContainer = styled.div`
    flex: 1;
    /* background-color: orange; */
    padding: 0.5rem;
`
const ContactMapContainer = styled.div`
    display: flex;
    /* background-color: lightblue; */
    height: 33rem;
    padding: 0.5rem;
`
const TitleStyle = styled.h1`
    font-size: 1.5rem;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: ${(props)=> props.theme.light.primary};
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
    ContactContainer,
    ContactDataContainer,
    ContactFormContainer,
    ContactInfoContainer,
    ContactMapContainer,
    TitleStyle,
    LabelStyle,
    ParagraphStyle,
    GroupContentStyle
}