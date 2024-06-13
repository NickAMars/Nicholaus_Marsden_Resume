import { Typography } from '@mui/material'
import { styled } from 'styled-components'

const Item = styled.a`
    background-color: #eee;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    border-radius: 10px;
    min-height: 300px;
    /* justify-content: center; */
    /* height: 100%; */
`

const ProjectImage =styled.img`
    height: 25rem;
`
const ProjectTitle =styled(Typography)`
    font-weight: 900;
    color: #000;
    margin-left: 10px;
`
const ProjectDescription =styled(Typography)`
    margin-left: 10px;
    color: #000;
    display: inline-block;
`
export {
    Item,
    ProjectImage,
    ProjectTitle,
    ProjectDescription
}