import { Box, Grid } from '@mui/material';
import React from 'react';
import { Item, ProjectImage, ProjectTitle, ProjectDescription } from './project.style';
import ONE_PIECE_IMG from '@assets/one_piece.png';
import CRICKET_WEBSITE from '@assets/cricket_website.png';
import styled from 'styled-components';

const ProjectContainer = styled(Box)`
  min-height: 75rem;
  padding: 1rem 1.5rem;
`
export const Project: React.FC<{}> = (props) => {
  return (
    <ProjectContainer >
        <Grid container sx={{ height: '100%' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <Item href="https://closed-eyes.surge.sh/" target="_blank">
                    <ProjectTitle variant="h5">One Piece Website</ProjectTitle>
                    <ProjectImage   loading="lazy"  src={ONE_PIECE_IMG} alt="one piece"/>
                    <ProjectDescription variant="body1">                    
                       <span> <strong>Created:</strong> <i>June 2018 </i> </span>
                    </ProjectDescription>
                    <ProjectDescription variant="body1">
                    This website was build to test my skills with html, css and javascript.
                        Made the website responsive, optimize the image with media queries and check for support of browser.
                    </ProjectDescription>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item href="https://cricket-mock.surge.sh/" target="_blank">
                    <ProjectTitle variant="h5">Cricket Website Re-create</ProjectTitle>
                    <ProjectImage  loading="lazy" src={CRICKET_WEBSITE} alt="cricket website"/>
                    <ProjectDescription variant="body1">                    
                       <span> <strong>Created:</strong> <i>Feb 2024</i> </span>
                    </ProjectDescription>
                    <ProjectDescription variant="body1">
                      Create a imitation cricket website withing three days before joining cricket.  
                    </ProjectDescription>
                </Item>
            </Grid>
        </Grid>
    </ProjectContainer>
  )
}
