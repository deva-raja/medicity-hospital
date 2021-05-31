import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { sendMessage } from '../api/messageApi';
import { useDispatch } from 'react-redux';
import { messageToast, setMessageToastValue } from '../redux/toastSlice';

function ContactBodyComponent() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [serverError, setServerError] = useState();

  const MessageSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    message: Yup.string().min(2, 'Too Short!').max(120, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const data = await sendMessage(values);
    if (data.data) {
      setSubmitting(false);
      dispatch(messageToast(true));
      dispatch(setMessageToastValue('Message sent successfully'));
      return history.push('/');
    }
    if (data.error) {
      setServerError(data);
      return setSubmitting(false);
    }
  };

  const CustomInputComponent = (props) => (
    <textarea
      placeholder='Tell us what you think'
      className='form__input form__messageArea'
      {...props}
    />
  );

  return (
    <div className='container'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={MessageSchema}>
        {({ errors, touched, isSubmitting }) => (
          <Form className='form' id='a-form'>
            <h2 className='form_title title'>Message</h2>
            <span className='form__span'>call us at 754-996-2839</span>
            <Field className='form__input' name='name' placeholder='Name' />
            {touched.name && errors.name && <div className='form-error'>{errors.name}</div>}
            <Field className='form__input' name='email' placeholder='Email' />
            {serverError && serverError.error && (
              <div className='form-error'>{serverError.error}</div>
            )}
            {touched.email && errors.email && <div className='form-error'>{errors.email}</div>}
            <Field name='message' as={CustomInputComponent} />
            {touched.message && errors.message && (
              <div className='form-error'>{errors.message}</div>
            )}
            <button
              disabled={isSubmitting}
              type='submit'
              className='form__button button submit message-button'
            >
              send message
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactBodyComponent;
