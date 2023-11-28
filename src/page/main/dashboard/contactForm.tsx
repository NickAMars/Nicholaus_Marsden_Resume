import React from 'react'
import styled from "styled-components";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography, TextareaAutosize } from '@mui/material';



const TitleHeader = styled(Typography)`
    font-size: 1.5rem;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: ${(props)=> props.theme.palette.primary.main};
    padding-bottom: 2rem;
`;

interface FormValues {
    name: string;
    email: string;
    message: string;
  }
const initialValues: FormValues = {
    name: '',
    email: '',
    message: ''
};
const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required!'),
});

export const ContactForm : React.FC<{}> = (props) => {

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: FormValues, { resetForm }: any) => {
      // Handle form submission logic here
      console.log('Form submitted:', values);
      resetForm();
    },
  });
  return (
    <Container maxWidth="sm">
      <TitleHeader variant="h4" gutterBottom>
        Contact Form
      </TitleHeader>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextareaAutosize
          minRows={4}
          placeholder="Message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      </Container>
  )
}
