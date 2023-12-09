import { Typography } from "@mui/material";
import styled from "styled-components";


const Title = styled(Typography)`
    font-weight: 900;
    text-decoration: underline;
    text-decoration-thickness: 0.3rem;
`
const SubTitle = styled(Typography)`
`



// Experience 
const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const JobStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
`
const CompanyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    & > *:first-child{
        font-weight: 900;
    }
`
const CompanyDetails = styled(Typography)`
        font-size: 1.2rem;
`

const CompanyDescription =styled.ul`
    padding: 0 2rem;
    font-size: 1.1rem;
`;
const BulletPoint =styled.li`
`;

//Eductation
const EducationContainer = styled.div`

`
const AcademicContainer = styled.div`
    width: 30rem;
`
const Academic = styled.div`
    display: flex;
    justify-content: space-between;
`
const AcademicYear = styled(Typography)`
    font-size: 1.2rem;
`
const AcademicName = styled(Typography)`
    font-size: 1.2rem;
    font-weight: 900;
`
const AcademicMajor = styled.div`
    font-size: 1.2rem;
`

export {
    Title,
    SubTitle,

    ExperienceContainer,
    JobStyle,
    CompanyContainer,
    CompanyDetails,
    CompanyDescription,
    BulletPoint,

    EducationContainer,
    AcademicContainer,
    Academic,
    AcademicYear,
    AcademicName,
    AcademicMajor

}