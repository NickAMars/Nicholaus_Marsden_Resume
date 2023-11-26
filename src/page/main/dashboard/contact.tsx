import styled from 'styled-components';
import { Fragment } from 'react';


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
export const Contact: React.FC<{}> = (props) => {
    return (
        <ContactContainer>
            <ContactDataContainer>
                <ContactFormContainer>
                    <TitleStyle>
                        Contact Form
                    </TitleStyle>
                </ContactFormContainer>
                <ContactInfoContainer>
                    <TitleStyle>Contact Informations</TitleStyle>
                    <GroupContentStyle>
                        <LabelStyle>Address:</LabelStyle>
                        <ParagraphStyle>Atlanta, Georgia</ParagraphStyle>
                    </GroupContentStyle>
                    <GroupContentStyle>
                        <LabelStyle>Phone:</LabelStyle>
                        <ParagraphStyle>+1 470-288-2317</ParagraphStyle>
                    </GroupContentStyle>
                    <GroupContentStyle>
                        <LabelStyle>Job:</LabelStyle>
                        <ParagraphStyle>Full Stack Software Developer</ParagraphStyle>,
                        <ParagraphStyle>Software Engineer</ParagraphStyle>,
                        <ParagraphStyle>Front-End Developer</ParagraphStyle>,
                        <ParagraphStyle>Back-End Developer</ParagraphStyle>
                    </GroupContentStyle>
                    <GroupContentStyle>
                        <LabelStyle>E-mail:</LabelStyle>
                        <ParagraphStyle>nicholausa.marsden@gmail.com</ParagraphStyle>
                    </GroupContentStyle>
                </ContactInfoContainer>
            </ContactDataContainer>
            <ContactMapContainer>
                <TitleStyle>
                    Contact Map
                </TitleStyle>
            </ContactMapContainer>
        </ContactContainer>
    );
}