import React from 'react'
import styled from 'styled-components'
import { Title } from './about.style'

const InterestContainer = styled.div`

`

export const Interest: React.FC<{}> = (props) => {
    return  <InterestContainer>
                <Title variant='h5'>
                    Interest:
                </Title>
            </InterestContainer>
}