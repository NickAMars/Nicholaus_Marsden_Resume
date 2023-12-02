import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem } from '@mui/lab'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { styled } from 'styled-components'
const TimelineContainer = styled(Timeline)`
  width: 100%;
  margin-top: -5rem;
  align-items: flex-start;
`
const TimelineItemStyle = styled(TimelineItem)`
  min-height: 3rem;
  margin-left: 0;
  &::before {
    content: none;
  }
`
const ImageItem = styled(TimelineItem)`
  min-height: 6rem;
  margin-left: -1.2rem;
  &::before {
    content: none;
  }
`
const LaptopIcon = styled(LaptopMacIcon)`
  font-size: 2.5rem;
`;

const DotLineConnector = styled(TimelineConnector)`
`
const TimelineContentStyle  = styled(TimelineContent)`
  margin-top: -1rem;
`
const DotStyle  = styled(TimelineDot)`
  margin: 0;
`
export {
    TimelineContainer,
    TimelineItemStyle,
    ImageItem,
    LaptopIcon,
    DotLineConnector,
    TimelineContentStyle,
    DotStyle
}