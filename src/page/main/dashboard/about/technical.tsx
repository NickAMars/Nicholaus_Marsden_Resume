import React from 'react'
import styled from 'styled-components'
import { Title } from './about.style'

const TechnicalContainer = styled.div`

`
export const Technical: React.FC<{}> = (props) => {
    return<TechnicalContainer>
                <Title variant='h5'>
                    Technical:
                </Title>
            </TechnicalContainer>
}