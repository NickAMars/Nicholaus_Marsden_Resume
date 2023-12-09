import React from 'react'
import styled from 'styled-components'
import { Title, SubTitle } from './about.style'
import { Rating, Typography } from '@mui/material'
import { PRIMARY_SKILLS, SECONDARY_SKILLS } from './util/constants'

const TechnicalContainer = styled.div`

`
const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 13rem; */
`
const SkillStyle = styled.span`
    display: flex;
    width: 18rem;
    padding-left: 1rem;
    & > * {
        flex: 1;
    }
`
const SkillOutline = styled.div`
    padding: 0 .4rem;

`
const SecondarySkillGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const SubjectStyle = styled(Typography)`

`
export const Technical: React.FC<{}> = (props) => {

    return<TechnicalContainer>
                <Title variant='h5'>
                    Technical Skill:
                </Title>
                <SkillContainer>
                    <SkillOutline>
                        <SubTitle variant='h6'>Primary Skills</SubTitle>
                        <SecondarySkillGroup>
                            {PRIMARY_SKILLS.map(skill => (
                                <SkillStyle key={skill.subject}>
                                    <SubjectStyle>{skill.subject} :</SubjectStyle>
                                    <Rating name="half-rating-read" defaultValue={skill.rank} precision={0.5} readOnly />
                                </SkillStyle>
                            ))}
                        </SecondarySkillGroup>
                    </SkillOutline>
                    <SkillOutline>
                        <SubTitle variant='h6'>Secondary Skills</SubTitle>
                        <SecondarySkillGroup>
                        {SECONDARY_SKILLS.map(skill => (
                            <SkillStyle key={skill.subject}>
                                <SubjectStyle variant='body1'>{skill.subject} :</SubjectStyle> 
                                <Rating name="half-rating-read" defaultValue={skill.rank} precision={0.5} readOnly />
                            </SkillStyle>
                        ))}
                        </SecondarySkillGroup>
                    </SkillOutline>
                </SkillContainer>
                {/* TypeScript, JavaScript, Java, HTML, CSS, React, Redux, Mobx.js, Angular 6, NGRX, Material UI, NodeJS, Express, Spring Boot, Restful API, Swagger, Kafka, Redis, Hibernate, NoSQL, SQL, Jest, Cypress, Junit, Docker, Kubernetes, AWS, Microsoft Azure  */}
            </TechnicalContainer>
}