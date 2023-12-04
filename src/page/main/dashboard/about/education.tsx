import React from 'react'
import styled from 'styled-components'
import { Title } from './about.style'

const EducationContainer = styled.div`

`

export const Education: React.FC<{}> = (props) => {
    return  <EducationContainer> 
                <Title variant='h5'>
                    Education:
                </Title>
            </EducationContainer>
}