import React from 'react';
import { navigate } from 'gatsby-link';
import styled from '@emotion/styled';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { graphql, StaticQuery } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';

const ContactFormStyled = styled.div`
  display: flex;
  background-color: var(--color-1);
  padding: 2rem 4.5rem 4rem;
  margin: 20rem auto 10rem;
  box-shadow: 0.1rem 1rem 0.5rem -0.4rem rgba(0, 0, 0, 0.2);
  max-width: 60rem;
  font-family: "Titillium Web", sans-serif;
  color: white;
  transition: 0.5s max-width;
  transition-delay: 0.2s;
  input,
  textarea {
    font-size: 1.5rem;
  }
  .form-style {
    transition: 0.5s;
    width: 100%;
    form {
      width: 50rem;
      @media ${ props => props.theme.media.md} {
        width: 100%;
      }
    }
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
  &:hover {
    max-width: 100rem;
    .form-style {
      width: 60%;
      @media ${ props => props.theme.media.md} {
        width: 100%;
      }
    }
    .contact-style {
      @media ${ props => props.theme.media.md} {
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
  }
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
    font-family: "Titillium Web", sans-serif;
    font-weight: 600;
  }
  &:disabled{
    color: gray;
    span{
      border: 0.3rem solid gray!important;
    }
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
  phone: Yup.string()
    .email('Invalid phone')
    .required('Required Phone'),
  text: Yup.string()
    .min(2, 'Too Short!')
    .required('Required Message')
});

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const ContactForm = () => {
  const [state, setState] = React.useState({});
  const [isRecaptcha, setIsRecaptcha] = React.useState(false);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const checkCaptcha = e => {
    if (e.target.value === '4') {
      setIsRecaptcha(true);
    } else {
      setIsRecaptcha(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };
  return (
    <div id='scroll_to_contact' style={{ paddingTop: '2.5rem' }}>
      <ContactFormStyled>
        <div style={{ display: 'flex', width: '100%' }}>
          <div className='form-style'>
            <Title>
              <strong>Contact</strong> us:
            </Title>
            <Formik
              initialValues={{ fullName: '', text: '' }}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting }) => {
                // setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                //   setSubmitting(false);
                // }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form
                  name='contact'
                  method='post'
                  action='/thanks/'
                  data-netlify={isRecaptcha && `true`}
                  data-netlify-honeypot={isRecaptcha && 'bot-field'}
                  onSubmit={isRecaptcha && handleSubmit}
                >
                  <FormWrapper>
                    <Label>Full Name: *</Label>{' '}
                    <ErrorMessage name='name' component={ErrorMessageSpan} />
                    <Field type='text' name='name' onChange={handleChange} />
                  </FormWrapper>
                  <FormWrapper>
                    <Label>Email: *</Label>{' '}
                    <ErrorMessage name='email' component={ErrorMessageSpan} />
                    <Field type='text' name='email' onChange={handleChange} />
                  </FormWrapper>
                  <FormWrapper>
                    <Label>Phone:</Label>{' '}
                    <ErrorMessage name='phone' component={ErrorMessageSpan} />
                    <Field type='text' name='phone' onChange={handleChange} />
                  </FormWrapper>
                  <FormWrapper>
                    <Label>Message: *</Label>{' '}
                    <ErrorMessage name='message' component={ErrorMessageSpan} />
                    <Field
                      type='textarea'
                      name='message'
                      onChange={handleChange}
                      component='textarea'
                    />
                  </FormWrapper>
                  <FormWrapper>
                    <Label>How much is 2+2:</Label>{' '}
                    <ErrorMessage name='captcha' component={ErrorMessageSpan} />
                    <Field type='text' name='captcha' onChange={checkCaptcha} />
                  </FormWrapper>
                  <Button type='submit' disabled={!isRecaptcha}>
                    <span>SEND</span>
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
          <ContactCMS />
        </div>
      </ContactFormStyled>
    </div >
  );
};

const Contact = ({ prismic }) => {
  const contactInfo = prismic.allContactss.edges[0].node;
  return (
    <div className='contact-style'>
      <div className='contact-style--content'>
        <h4 style={{ fontSize: '2.2rem' }}>SOlabels</h4>
        <p>Phones: {contactInfo.phone[0].text}</p>
        <p>{contactInfo.address[0].text}</p>
        <p>{contactInfo.email[0].text}</p>
      </div>
    </div>
  );
};

const ContactCMS = () => (
  <StaticQuery query={query} render={withPreview(Contact, query)} />
);

const query = graphql`
  query {
    prismic {
      allContactss {
        edges {
          node {
            address
            email
            phone
          }
        }
      }
    }
  }
`;

export default ContactForm;
