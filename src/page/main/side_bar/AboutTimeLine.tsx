import React from 'react'
import { TimelineConnector, TimelineContent, TimelineSeparator } from '@mui/lab'
import { Description, DotLineConnector, DotStyle, ImageItem, LaptopIcon, TimelineContainer, TimelineContentStyle, TimelineItemStyle } from './AboutTimeLine.style';

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
        <TimelineContentStyle><Description variant="subtitle1" ><b>Name:</b> Nicholaus Marsden</Description> </TimelineContentStyle>
      </TimelineItemStyle>
      <TimelineItemStyle>
        <TimelineSeparator>
          <DotStyle variant="outlined" color="primary" />
          <DotLineConnector />
        </TimelineSeparator>
        <TimelineContentStyle><Description variant="subtitle1" ><b>Job:</b> Full Stack Javascript Developer</Description></TimelineContentStyle>
      </TimelineItemStyle>
      <TimelineItemStyle>
        <TimelineSeparator>
          <DotStyle variant="outlined" color="primary" />
          <DotLineConnector />
        </TimelineSeparator>
        <TimelineContentStyle><Description variant="subtitle1" ><b>Email:</b> nicholausa.marsden@gmail.com</Description></TimelineContentStyle>
      </TimelineItemStyle>
      <TimelineItemStyle>
        <TimelineSeparator>
          <DotStyle variant="outlined" color="primary"/>
        </TimelineSeparator>
        <TimelineContentStyle><Description variant="subtitle1" ><b>BirthDay</b>: April 2</Description></TimelineContentStyle>
      </TimelineItemStyle>
      
      
    </TimelineContainer>
  )
}
