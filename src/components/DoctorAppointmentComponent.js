import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { getAppointments } from '../api/appointmentApi';
import patientImg from '../images/patient_filler.jpg';
import CardComponent from './DoctorMessageCardComponent';

Modal.setAppElement('#root');
function DoctorAppointmentComponent() {
  const currentDoctorId = useSelector((state) => state.currentDoctor.id);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchMessage = async () => {
      console.log({ currentDoctorId });
      const data = await getAppointments(currentDoctorId);
      console.log(data);
      setAppointments(data.appointment);
    };
    fetchMessage();

    return () => {
      setAppointments();
    };
  }, [currentDoctorId]);

  return (
    <div className='container'>
      <div className='message'>
        <h2 className='title'>appointments</h2>
      </div>
      <div className='card-container'>
        {appointments &&
          appointments.map((appointment) => (
            <CardComponent key={appointment._id} data={appointment} img={patientImg} />
          ))}
      </div>
    </div>
  );
}

export default DoctorAppointmentComponent;
