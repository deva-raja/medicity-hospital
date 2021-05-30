import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import { sendAppointments } from '../api/appointmentApi';
import { changePage } from '../redux/appointmentSlice';

function AppointmentTime() {
  const doctor_id = useSelector((state) => state.doctorPage.data._id);
  const dispatch = useDispatch();
  const history = useHistory();

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const createAppointmentSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    age: Yup.string().max(2, 'Too Old!').required('Required'),
    sex: Yup.string().required('Required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'to short')
      .max(10, 'to long'),
  });

  const initialValues = {
    name: '',
    age: '',
    sex: '',
    phoneNumber: '',
  };


  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    values.doctor_id = doctor_id;
    setSubmitting(true);
    const data = await sendAppointments(values);

    if (data.data) {
      setSubmitting(false);
      dispatch(changePage({ doctor: true, time: false }));
      history.push('/');
      return resetForm();
    }

    if (data.error) {
      return setSubmitting(false);
    }
  };

  const CustomInputComponent = (props) => (
    <Field {...props} as='select' className='form__input'>
      <option className='form__input' value='' label='Sex' disabled />
      <option className='form__input' value='male' label='Male' />
      <option className='form__input' value='female' label='Female' />
    </Field>
  );
  return (
    <div className='container'>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={createAppointmentSchema}
      >
        {({ errors, touched, isSubmitting, values }) => (
          <Form className='form' id='a-form'>
            <h2 className='form_title title'>Appointment</h2>

            <Field className='form__input' name='name' placeholder='Name' />
            {touched.name && errors.name && <div className='form-error'>{errors.name}</div>}

            <Field className='form__input' name='age' placeholder='Age' />
            {touched.age && errors.age && <div className='form-error'>{errors.age}</div>}

            <Field name='sex' values={values} as={CustomInputComponent} />
            {touched.sex && errors.sex && <div className='form-error'>{errors.sex}</div>}

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
      <ToastContainer />
    </div>
  );
}

export default AppointmentTime;
