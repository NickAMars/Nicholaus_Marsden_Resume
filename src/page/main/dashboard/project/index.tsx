import { Box, Grid } from '@mui/material'
import React from 'react'
import { Item, ProjectImage, ProjectTitle, ProjectDescription } from './project.style'
import Work from '@assets/work.jpg'
import styled from 'styled-components'

const ProjectContainer = styled(Box)`
  min-height: 75rem;
`
export const Project: React.FC<{}> = (props) => {
  return (
    <ProjectContainer >
        <Grid container sx={{ height: '100%' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <Item href="https://www.google.com/" target="_blank">
                    <ProjectTitle variant="h5">Work</ProjectTitle>
                    <ProjectImage src={Work} alt="work"/>
                    <ProjectDescription variant="body1">Project Description:</ProjectDescription>
                </Item>
            </Grid>
        </Grid>
    </ProjectContainer>
  )
}
