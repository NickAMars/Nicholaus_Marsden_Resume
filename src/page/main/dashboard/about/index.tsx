// import { } from '@mui/material'
import React from 'react'
import { Description } from './description'
import { Technical } from './technical'
import { Education } from './education'
import { AboutContainer } from './about.style'
import { SoftDescription } from './softDescription'
import { Certification } from './certificate'


export const About: React.FC<{}> = (props) => {
  return (
    <AboutContainer>
        <Description />
        <SoftDescription />
        <Technical />
        <Education />
        <Certification />
        {/* <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /> */}
    </AboutContainer>
  )
}
