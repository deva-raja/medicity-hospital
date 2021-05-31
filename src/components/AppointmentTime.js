import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import 'date-fns';
import { format } from 'date-fns';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import { sendAppointments } from '../api/appointmentApi';
import { changePage } from '../redux/appointmentSlice';
import { messageToast, setMessageToastValue } from '../redux/toastSlice';

function AppointmentTime() {
  const doctor_id = useSelector((state) => state.doctorPage.data._id);
  const dispatch = useDispatch();
  const history = useHistory();

  const createAppointmentSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    age: Yup.number()
      .typeError('you must specify an age')
      .required()
      .positive()
      .integer()
      .min(1, 'Too young')
      .max(100, 'Too old'),
    sex: Yup.string().required('Required'),
    conditions: Yup.string().min(2, 'Too Short!').max(120, 'Too Long!'),
    date: Yup.date().nullable().required('Required'),
    time: Yup.date().nullable().required('Required'),
  });

  const today = new Date();
  const nextDay = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  const initialValues = {
    name: '',
    age: '',
    sex: '',
    conditions: '',
    date: nextDay,
    time: today,
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    values.doctor_id = doctor_id;
    setSubmitting(true);

    // full date to what we need
    const newDate = format(new Date(values.date), 'do MMMM y');
    const newTime = format(new Date(values.time), 'h:m a');
    const newValues = values;
    newValues.date = newDate;
    newValues.time = newTime;
    console.log({ newValues });
    const data = await sendAppointments(newValues);

    if (data.data) {
      setSubmitting(false);
      dispatch(changePage({ doctor: true, time: false }));
      dispatch(messageToast(true));
      dispatch(setMessageToastValue('Appointment booking successfull'));
      resetForm();
      return history.push('/');
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

  const CustomMessageAreaComponent = (props) => (
    <textarea
      placeholder='Medical conditions if any'
      className='form__input form__medicalCondition'
      {...props}
    />
  );

  return (
    <div className='container'>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={createAppointmentSchema}
      >
        {({ errors, touched, isSubmitting, values, setFieldValue }) => (
          <Form className='form' id='a-form'>
            <h2 className='form_title title'>Appointment</h2>

            <Field className='form__input' name='name' placeholder='Name' />
            {touched.name && errors.name && <div className='form-error'>{errors.name}</div>}

            <Field className='form__input' name='age' placeholder='Age' />
            {touched.age && errors.age && <div className='form-error'>{errors.age}</div>}

            <Field name='sex' values={values} as={CustomInputComponent} />
            {touched.sex && errors.sex && <div className='form-error'>{errors.sex}</div>}

            <Field name='conditions' values={values} as={CustomMessageAreaComponent} />
            {touched.conditions && errors.conditions && (
              <div className='form-error'>{errors.conditions}</div>
            )}

            {/* date picker */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                style={{ width: '340px', heigth: '40px' }}
                disablePast
                error={false}
                helperText={null}
                margin='normal'
                id='date-picker-dialog'
                value={values.date}
                onChange={(value) => setFieldValue('date', value)}
                label='Date of appointment'
                format='MM/dd/yyyy'
              />
            </MuiPickersUtilsProvider>
            {/* {touched.date && errors.date && <div className='form-error'>{errors.date}</div>} */}

            {/* time picker */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardTimePicker
                style={{ width: '340px', heigth: '40px' }}
                value={values.time}
                onChange={(value) => setFieldValue('time', value)}
                margin='normal'
                id='time-picker'
                label='Time of appointment'
              />
            </MuiPickersUtilsProvider>
            {/* {touched.time && errors.time && <div className='form-error'>{errors.time}</div>} */}

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
