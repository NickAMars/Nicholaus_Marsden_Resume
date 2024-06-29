// import { } from '@mui/material'
import React from 'react'
import { Description } from './description'
import { Technical } from './technical'
import { Education } from './education'
import { AboutContainer } from './about.style'
import { Certification } from './certificate'


export const About: React.FC<{}> = (props) => {
  return (
    <AboutContainer>
        <Description />
        <Technical />
        <Education />
        <Certification />
    </AboutContainer>
  )
}
