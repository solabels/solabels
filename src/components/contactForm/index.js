import React from 'react';
import styled from '@emotion/styled';
import { Formik } from 'formik';

const ContactFormStyled = styled.div`
  background-color: var(--color-5);
  margin: 20rem auto;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

  max-width: 80rem;
`;

const ContactForm = () => {
  return (
    <ContactFormStyled style={{ paddingTop: '20rem' }}>
      <input></input>
    </ContactFormStyled>
  );
};

export default ContactForm;
