import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { ContactFormContainer, TitleStyle } from './dashboard.style'

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

  const onSubmit = (values: FormValues, { resetForm }: any) => {
    // Handle your form submission logic here
    console.log('Form submitted with values:', values);
    // Reset the form after successful submission
    resetForm();
  };
  return (
    <ContactFormContainer>
        <TitleStyle>
            Contact Form
        </TitleStyle>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            {({ errors, touched }) => (
                 <Form>
                    {/* Form fields go here */}
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
            
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
            
                    <div>
                        <label htmlFor="message">Message:</label>
                        <Field as="textarea" id="message" name="message" />
                        <ErrorMessage name="message" component="div" />
                    </div>
            
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </ContactFormContainer>
  )
}
