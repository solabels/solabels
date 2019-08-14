import React from 'react';
import styled from '@emotion/styled';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactFormStyled = styled.div`
  display: flex;
  background-color: var(--color-1);
  padding: 2rem 4.5rem;
  margin: 20rem auto;
  box-shadow: 0.1rem 1rem 0.5rem -0.4rem rgba(0, 0, 0, 0.2);
  max-width: 60rem;
  font-family: 'Titillium Web', sans-serif;
  color: white;
`;

const Title = styled.h3`
  font-size: 3rem;
  text-align: center;
`;

const Label = styled.label`
  font-size: 1.6rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  font-size: 1.8rem;
  height: 100%;
  float: right;
  padding: 1.5rem;
  color: black;
  background-color: var(--color-5);
  font-family: 'Titillium Web', sans-serif;
  cursor: pointer;
`;

const FormWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required Name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required Email'),
  text: Yup.string()
    .min(2, 'Too Short!')
    .required('Required Message')
});

const ContactForm = () => {
  return (
    <ContactFormStyled>
      <div style={{ width: '100%' }}>
        <Title>Contact US:</Title>
        <Formik
          initialValues={{ email: '', fullName: '', phone: '', text: '' }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form style={{ margin: '0 auto' }}>
              <FormWrapper>
                <Label>Full Name:</Label>
                <Field type="text" name="fullName" />
                <ErrorMessage name="fullName" component="div" />
              </FormWrapper>
              <FormWrapper>
                <Label>Email:</Label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </FormWrapper>
              <FormWrapper>
                <Label>Phone:</Label>
                <Field type="text" name="phone" />
                <ErrorMessage name="phone" component="div" />
              </FormWrapper>
              <FormWrapper>
                <Label>Message:</Label>
                <Field type="textarea" name="text" component="textarea" />
                <ErrorMessage name="text" component="div" />
              </FormWrapper>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </ContactFormStyled>
  );
};

export default ContactForm;
