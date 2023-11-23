// Core viewer
import pdfResume from '@assets/NICHOLAUS_MARSDEN_RESUME.pdf'
import styled from 'styled-components';



const ResumeStyle = styled.div`
`

export const Resume: React.FC<{}> = (props) => {
    return (
        <>
                {/* <a href={pdfResume} target='_blank' >
            <p>Click to open PDF file in a new tab</p>
        </a> */}
            {/* <iframe src={pdfResume}  width={"100%"}
             height={"100%"}
            /> */}
            <embed src={pdfResume} width="100%" height="100%" />
        </>
    );
  }