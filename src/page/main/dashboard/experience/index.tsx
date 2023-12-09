import React from 'react'
import { BulletPoint, CompanyContainer, CompanyDescription, CompanyDetails, ExperienceContainer, JobStyle, Title } from './experience.style'
import { JOB_EXPERIENCE, DESCRIBE_EXPEIENCE} from './util/constants'


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