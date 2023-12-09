import React from 'react'
import styled from 'styled-components'
import { Title } from './about.style'
import { JOB_EXPERIENCE, DESCRIBE_EXPEIENCE} from './util/constants'
import { Typography } from '@mui/material'
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
export const Experience: React.FC<{}> = (props) => {
    return <ExperienceContainer>
            <Title variant='h5'>
                Experience:
            </Title>
            {
                JOB_EXPERIENCE.map(job =>(
                    <JobStyle key={job.Company}>
                        <CompanyContainer> <CompanyDetails>{job.Company}</CompanyDetails> <CompanyDetails>{job.Location}</CompanyDetails>  </CompanyContainer>
                        <CompanyContainer> <CompanyDetails>{job.JobTitle}</CompanyDetails> <CompanyDetails>{job.Years}</CompanyDetails>  </CompanyContainer>
                        <CompanyDescription>
                            {DESCRIBE_EXPEIENCE[job.Company].map((description,i) => (
                                <BulletPoint key={i}>{description}</BulletPoint>
                            ))}
                        </CompanyDescription>
                    </JobStyle>
                ))
            }
        </ExperienceContainer>
}