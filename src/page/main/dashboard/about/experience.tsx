import React from 'react'
import styled from 'styled-components'
import { Title } from './about.style'

const ExperienceContainer = styled.div`

`

export const Experience: React.FC<{}> = (props) => {
    return <ExperienceContainer>
            <Title variant='h5'>
                Experience:
            </Title>
        </ExperienceContainer>
}