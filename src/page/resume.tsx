import pdfResume from '@assets/NICHOLAUS_MARSDEN_RESUME.pdf'
import styled from 'styled-components';



const ResumeStyle = styled.div`
`

export const Resume: React.FC<{}> = (props) => {
    return (
        <>
            <embed src={pdfResume} width="100%" height="100%" />
        </>
    );
  }