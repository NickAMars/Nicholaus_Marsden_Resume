import React from 'react'
import { TimelineConnector, TimelineContent, TimelineSeparator } from '@mui/lab'
import { Typography } from '@mui/material';
import { DotLineConnector, DotStyle, ImageItem, LaptopIcon, TimelineContainer, TimelineContentStyle, TimelineItemStyle } from './AboutTimeLine.style';


export const TimeLine: React.FC<{}> = (props) => {
  return (
    <TimelineContainer>
      <ImageItem>
        <TimelineSeparator>
          <DotStyle color="primary" >
            <LaptopIcon />
          </DotStyle>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent/>
      </ImageItem>
      <TimelineItemStyle>
        <TimelineSeparator>
          <DotStyle variant="outlined" color="primary" />
          <DotLineConnector />
        </TimelineSeparator>
        <TimelineContentStyle><Typography variant="subtitle1" ><b>Name:</b> Nicholaus Marsden</Typography> </TimelineContentStyle>
      </TimelineItemStyle>
      <TimelineItemStyle>
        <TimelineSeparator>
          <DotStyle variant="outlined" color="primary" />
          <DotLineConnector />
        </TimelineSeparator>
        <TimelineContentStyle><Typography variant="subtitle1" ><b>Job:</b> Full Stack Javascript Developer</Typography></TimelineContentStyle>
      </TimelineItemStyle>
      <TimelineItemStyle>
        <TimelineSeparator>
          <DotStyle variant="outlined" color="primary" />
          <DotLineConnector />
        </TimelineSeparator>
        <TimelineContentStyle><Typography variant="subtitle1" ><b>Email:</b> nicholausa.marsden@gmail.com</Typography></TimelineContentStyle>
      </TimelineItemStyle>
      <TimelineItemStyle>
        <TimelineSeparator>
          <DotStyle variant="outlined" color="primary"/>
        </TimelineSeparator>
        <TimelineContentStyle><Typography variant="subtitle1" ><b>BirthDay</b>: April 2</Typography></TimelineContentStyle>
      </TimelineItemStyle>
      
      
    </TimelineContainer>
  )
}
