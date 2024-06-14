import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    /* background-color: lightblue;  */
`
const Title = styled(Typography)`
    font-weight: 900;
    text-decoration: underline;
    text-decoration-thickness: 0.3rem;
`
const DescriptionStyle = styled(Typography)`
    font-size: 1.5rem;
`
export const Description: React.FC<{}> = (props) => {
    return  <DescriptionContainer >
                <Title variant='h4'>Description:</Title>
                <DescriptionStyle variant='h6'>
                    Full Stack Developer with 5 years of Agile development experience, adept at collaborating with cross-functional
                    teams. Proficient in  <b>JavaScript, Typescript, React.js, Node.js and Spring Boot</b> with a passion for optimizing application
                    performance and streamlining processes.
                </DescriptionStyle>
            </DescriptionContainer>
}