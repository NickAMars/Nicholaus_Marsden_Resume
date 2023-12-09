import styled from 'styled-components';
import { Typography, TextField, Button, Container } from '@mui/material';

const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    margin-top: 2rem;
`
const ContactDataContainer = styled.div`
    display: flex;
    height: 38rem;
    padding-bottom: 1rem;
    justify-content: space-around;
`
const ContactInfoContainer = styled.div`
    flex: 1;
    /* background-color: orange; */
    padding: 0.5rem;
`
const ContactMapContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: lightblue; */
    height: 30rem;
    padding: 0.5rem;
`

const ContactTitleHeader = styled(Typography)`
    font-size: 1.8rem;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: ${(props)=> props.theme.palette.primary.main};
    padding-bottom: 2rem;
`;


const ContactFormField = styled.form`
  display: flex;
  flex-direction: column;
`;

const ContactTextField = styled(TextField)`
  width: 30rem;
  margin-top: 0;
  & input, & p, & label {
   font-size: 1.4rem;
  }
`;
const ContactTextarea = styled(TextField)`
  width: 30rem;
  margin-top: 0;
  margin-bottom: 10px;
  /* font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; */
  & div textarea,  & p, & label {
   font-size: 1.6rem;
  }
`;

const ContactButton = styled(Button)`
  width: 10rem;
`;

const ContactFormContainer = styled(Container)`
  flex: 1;
`;


export {
    ContactContainer,
    ContactDataContainer,
    ContactInfoContainer,
    ContactMapContainer,
    ContactTitleHeader,

    ContactFormContainer,
    ContactFormField,
    ContactTextField,
    ContactTextarea,
    ContactButton
}