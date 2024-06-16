import React from 'react'
import { useFormik } from 'formik';
import { ContactTitleHeader, ContactFormContainer, ContactFormField, ContactTextField, ContactTextarea, ContactButton } from './contact.style';
import { contactSchema } from './validation/contact.validation';
import { FormValues } from './interface/form-value.interface';
import axios from 'axios';
import { useModal } from '@src/context/ModalContext';

const initialValues: FormValues = {
    name: '',
    email: '',
    message: ''
};

const sendMessage = async (values: FormValues, resetForm: any) =>{
      try{
        await axios.post('https://api.nicholausamarsden.com/send', {
          fullName: values.name,
          email: values.email,
          message: values.message
        }, { headers:{
          'Content-Type': 'application/json'
        }})
        // code use a toast verify the user that data hase been sent
        console.log("Successfully handled")
      }catch(error){
        console.error(error);
      }finally{
        resetForm();
      }
}

export const ContactForm : React.FC<{}> = (props) => {
  const {showModal} = useModal();
  const formik = useFormik({
    initialValues,
    validationSchema: contactSchema,
    // use this to open up the modal instead and then exicute the request
    onSubmit: async (values: FormValues, {resetForm}: any) => {
      if(showModal){
        showModal(
          {
            fullName: values.name,
            email: values.email,
            message: values.message,
            onSubmit: sendMessage.bind(null, values, resetForm)
          }
        )
      }
    },
  });
  return (
    <ContactFormContainer maxWidth="sm">
      <ContactTitleHeader variant="h4" gutterBottom>
        Contact Form
      </ContactTitleHeader>
      <ContactFormField onSubmit={formik.handleSubmit}>
        <ContactTextField
          label="Full Name"
          variant="filled"
          fullWidth
          margin="normal"
          name="name"
          size="small" 
          value={formik.values.name}
          inputProps={{ maxLength: 35 }}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <ContactTextField
          label="Email"
          variant="filled"
          fullWidth
          margin="normal"
          type="email"
          name="email"
          size="small" 
          value={formik.values.email}
          inputProps={{ maxLength: 50 }}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <ContactTextarea
          label="Message"
          minRows={4}
          placeholder="Enter Description:"
          name="message"
          multiline
          maxRows={4}
          inputProps={{ maxLength: 255 }}
          variant="filled"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <ContactButton type="submit" variant="contained" color="primary">
          Submit
        </ContactButton>
      </ContactFormField>
    </ContactFormContainer>
  )
}
