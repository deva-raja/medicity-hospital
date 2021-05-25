import React from 'react';
import { Formik, Form, Field } from 'formik';

function ContactBodyComponent() {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };
  const onSubmit = (values) => {
    console.log('form is submitted', values);
  };

  const CustomInputComponent = (props) => (
    <textarea placeholder='Tell us what you think' className='form__input form__messageArea' />
  );

  return (
    <div className='container'>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values }) => (
          <Form className='form' id='a-form'>
            <h2 className='form_title title'>Message</h2>
            <span className='form__span'>call us at 754-996-2839</span>
            <Field className='form__input' name='name' type='text' placeholder='Name' />
            <Field className='form__input' name='email' type='text' placeholder='Email' />
            <Field name='message' as={CustomInputComponent} />
            <button type='submit' className='form__button button submit message-button'>
              send message
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactBodyComponent;

/* <select className='form__input' required>
          <option className='form__input' value='' disabled selected>
          Sex
          </option>
          <option className='form__input' value='male'>
          Male
          </option>
          <option className='form__input' value='female'>
          Female
          </option>
        </select> */
