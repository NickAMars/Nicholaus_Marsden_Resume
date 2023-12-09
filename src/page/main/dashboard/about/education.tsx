import React from 'react'
import {  Academic, AcademicContainer, AcademicMajor, AcademicName, AcademicYear, EducationContainer, Title } from './about.style'
import { educations } from './util/constants'

export const Education: React.FC<{}> = (props) => {
    return  <EducationContainer> 
                <Title variant='h5'>
                    Education:
                </Title>
                {educations.map((eduction=>
                    (
                        <AcademicContainer key={eduction.name}>
                            <Academic>
                                <AcademicName>{eduction.name}</AcademicName> 
                                <AcademicYear>{eduction.year}</AcademicYear>  
                            </Academic>
                            <AcademicMajor>
                                {eduction.major}
                            </AcademicMajor>
                        </AcademicContainer>
                    )))}
            </EducationContainer>
}