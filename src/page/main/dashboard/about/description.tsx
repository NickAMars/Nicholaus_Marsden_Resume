import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    background-color: lightblue;
`
const Title = styled(Typography)`
    font-weight: 900;
    text-decoration: underline;
    text-decoration-thickness: 0.3rem;
`
export const Description: React.FC<{}> = (props) => {
    return  <DescriptionContainer >
                <Title variant='h5'>Description:</Title>
                <Typography variant='h6'>
                    Results-driven Software Engineer with 4+ years of Agile development experience.
                    Proficient in <b>React.js, Angular, Node.js and Spring Boot.</b> Passionate 
                    about optimizing application performance and streamlining processes.
                </Typography>
            </DescriptionContainer>
}