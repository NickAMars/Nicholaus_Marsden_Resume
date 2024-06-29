import React from 'react'
import { Title, SubTitle, TechnicalContainer, SkillContainer, SkillOutline, SecondarySkillGroup, SkillStyle, SubjectStyle } from './about.style'
import { Rating } from '@mui/material'
import { PRIMARY_SKILLS } from './util/constants'


export const Technical: React.FC<{}> = (props) => {

    return<TechnicalContainer>
                <Title variant='h4'>
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
                </SkillContainer>
                {/* TypeScript, JavaScript, Java, HTML, CSS, React, Redux, Mobx.js, Angular 6, NGRX, Material UI, NodeJS, Express, Spring Boot, Restful API, Swagger, Kafka, Redis, Hibernate, NoSQL, SQL, Jest, Cypress, Junit, Docker, Kubernetes, AWS, Microsoft Azure  */}
            </TechnicalContainer>
}