// import { } from '@mui/material'
import React from 'react'
import { Description } from './description'
import { Technical } from './technical'
import { Experience } from './experience'
import { Education } from './education'
import { Interest } from './interest'
import { styled } from 'styled-components'

const AboutContainer = styled.div`
    /* background-color: lightblue; */
    display: flex;
    flex-direction:column;
    height: 100%;
    padding: 0.5rem;
`

export const About: React.FC<{}> = (props) => {
  return (
    <AboutContainer>
        <Description />
        <Technical />
        <Experience />
        <Education />
        <Interest />
        {/* <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /> */}
    </AboutContainer>
  )
}
