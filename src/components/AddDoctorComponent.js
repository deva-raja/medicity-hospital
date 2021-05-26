import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { sendMessage } from '../api/messageApi';
import { messageToast } from '../redux/toastSlice';

function AddDoctorComponent() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [serverError, setServerError] = useState();

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const MessageSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(120, 'Too Long!').required('Required'),
    speciality: Yup.string().required('Required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'to short')
      .max(10, 'to long'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
    speciality: '',
    phoneNumber: '',
  };

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    // const data = await sendMessage(values);
    console.log(values);
    // if (data.data) {
    //   setSubmitting(false);
    //   dispatch(messageToast(true));
    //   return history.push('/');
    // }
    // if (data.error) {
    //   setServerError(data);
    //   return setSubmitting(false);
    // }
  };

  const CustomInputComponent = (props) => (
    <select {...props} className='form__input' name='speciality' value={props.values.speciality}>
      <option className='form__input' value='' label='Speciality' disabled selected />
      <option className='form__input' value='cardiology' label='Cardiology' />
      <option className='form__input' value='dermatology' label='Dermatology' />
      <option className='form__input' value='vaccination' label='Vaccination' />
      <option className='form__input' value='neuorology' label='Neuorology' />
    </select>
  );

  return (
    <div className='container'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={MessageSchema}>
        {({ errors, touched, isSubmitting, values }) => (
          <Form className='form' id='a-form'>
            <h2 className='form_title title'>add doctor</h2>

            <Field className='form__input' name='name' placeholder='Name' />
            {touched.name && errors.name && <div className='form-error'>{errors.name}</div>}

            <Field className='form__input' name='email' placeholder='Email' />
            {serverError && serverError.error && (
              <div className='form-error'>{serverError.error}</div>
            )}
            {touched.email && errors.email && <div className='form-error'>{errors.email}</div>}

            <Field className='form__input' name='password' placeholder='Password' />
            {touched.password && errors.password && (
              <div className='form-error'>{errors.password}</div>
            )}

            <Field name='speciality' values={values} as={CustomInputComponent} />
            {touched.speciality && errors.speciality && (
              <div className='form-error'>{errors.speciality}</div>
            )}

            <Field
              className='form__input'
              name='phoneNumber'
              placeholder='Phone Number(optional)'
            />
            {touched.phoneNumber && errors.phoneNumber && (
              <div className='form-error'>{errors.phoneNumber}</div>
            )}

            <button
              disabled={isSubmitting}
              type='submit'
              className='form__button button submit message-button'
            >
              add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddDoctorComponent;
