import React from 'react';
import styled from 'styled-components';
import { CertificateContainer, Title } from './about.style';




export const Certification: React.FC<{}> = (props) => {
    return (<CertificateContainer>
                <Title variant='h4'>
                    Certification:
                </Title>
                AWS Certified Developer - Associate 2024
            </CertificateContainer>);
}