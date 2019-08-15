import React from 'react';
import styled from '@emotion/styled';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactFormStyled = styled.div`
  /* display: flex; */
  background-color: var(--color-1);
  padding: 2rem 4.5rem 4rem;
  margin: 20rem auto 10rem;
  box-shadow: 0.1rem 1rem 0.5rem -0.4rem rgba(0, 0, 0, 0.2);
  max-width: 60rem;
  font-family: 'Titillium Web', sans-serif;
  color: white;
  transition: 0.5s max-width;
  transition-delay: 0.2s;
  .form-style {
    transition: 0.5s;
    width: 100%;
  }
  .contact-style {
    transition: 0.5s;
    transition-property: opacity;
    transition-duration: 0.5s;
    opacity: 0;
    width: 0%;
    height: 0%;
    overflow: hidden;
    .contact-style--content {
      text-align: center;
      overflow: hidden;
      display: none;
      margin-top: 20%;
      padding: 1rem 1.5rem;
    }
  }
  /* &:hover {
    max-width: 100rem;
    .form-style {
      width: 60%;
      @media ${ props => props.theme.media.md } {
        width: 100%;
      }
    }
    .contact-style {
      @media ${ props => props.theme.media.md } {
        width: 0%;
        display: none;
      }
      transition-delay: 0.5s;
      width: 40%;
      height: 100%;
      opacity: 1;
      .contact-style--content {
        display: block;
        font-size: 1.6rem;
        word-break: keep-all;
        white-space: nowrap;
      }
    }
  } */
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 3rem;
  text-align: center;
  opacity: 0.9;
`;

const Label = styled.label`
  display: inline-block;
  width: 49%;
  font-size: 1.6rem;
  opacity: 0.9;
`;

const ErrorMessageSpan = styled.span`
  display: inline-block;
  width: 50%;
  text-align: right;
  opacity: 0.9;
`;

const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  float: right;
  color: black;
  padding: 0.5rem;
  background-color: var(--color-5);
  cursor: pointer;
  span {
    display: block;
    padding: 0.5rem;
    border: 0.3rem solid var(--color-1);
    font-size: 1.5rem;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
  }
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
      <div style={{ display: 'flex', width: '100%' }}>
        <div className="form-style">
          <Title>
            <strong>Contact</strong> us:
          </Title>
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
                  <Label>Full Name: *</Label> <ErrorMessage name="fullName" component={ErrorMessageSpan} />
                  <Field type="text" name="fullName" />
                </FormWrapper>
                <FormWrapper>
                  <Label>Email: *</Label> <ErrorMessage name="email" component={ErrorMessageSpan} />
                  <Field type="email" name="email" />
                </FormWrapper>
                <FormWrapper>
                  <Label>Phone:</Label> <ErrorMessage name="phone" component={ErrorMessageSpan} />
                  <Field type="text" name="phone" />
                </FormWrapper>
                <FormWrapper>
                  <Label>Message: *</Label> <ErrorMessage name="text" component={ErrorMessageSpan} />
                  <Field type="textarea" name="text" component="textarea" />
                </FormWrapper>
                <Button type="submit" disabled={isSubmitting}>
                  <span>SEND</span>
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        {/* <div className="contact-style">
          <div className="contact-style--content">
            <h4 style={{ fontSize: '2.2rem' }}>Solabels</h4>
            <p>
              Phones: 321-506-4704
              <br />
              322-501-4411, 412-133-3112
            </p>
            <p>
              1600 Pennsylvania Ave NW,
              <br /> Washington, DC 20500, USA
            </p>
          </div>
        </div> */}
      </div>
    </ContactFormStyled>
  );
};

export default ContactForm;
