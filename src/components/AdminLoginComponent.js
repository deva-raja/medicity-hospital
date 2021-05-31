import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { loginAdmin } from '../api/adminApi';
import { useHistory } from 'react-router-dom';
import { messageToast, setMessageToastValue } from '../redux/toastSlice';
import { useDispatch } from 'react-redux';

// admin@gmail.com
// admin123
function AdminLoginComponent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [serverError, setServerError] = useState();
  const removeDoctorSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(120, 'Too Long!').required('Required'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const data = await loginAdmin(values);

    if (data.data) {
      setSubmitting(false);
      dispatch(messageToast(true));
      dispatch(setMessageToastValue('Admin login successfull'));
      resetForm();
      return history.push('/personel');
    }

    if (data.error) {
      setServerError(data);
      return setSubmitting(false);
    }
  };

  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <div className='container'>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={removeDoctorSchema}
      >
        {({ errors, touched, isSubmitting, values }) => (
          <Form className='form' id='a-form'>
            <h2 className='form_title title'>welcome admin</h2>

            <Field className='form__input' name='email' placeholder='Email' />
            {serverError && serverError.error && (
              <div className='form-error'>{serverError.error.email}</div>
            )}
            {touched.email && errors.email && <div className='form-error'>{errors.email}</div>}

            <Field className='form__input' name='password' placeholder='Password' />
            {serverError && serverError.error && (
              <div className='form-error'>{serverError.error.password}</div>
            )}
            {touched.password && errors.password && (
              <div className='form-error'>{errors.password}</div>
            )}

            <button
              disabled={isSubmitting}
              type='submit'
              className='form__button button submit message-button'
            >
              login
            </button>
            <div className='login-info'>
              <div>Try email:admin@gmail.com password:admin123</div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AdminLoginComponent;
