import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { getAppointments } from '../api/appointmentApi';
import patientImg from '../images/patient_filler.jpg';
import CardComponent from './DoctorMessageCardComponent';
import RoundSkeletonCard from '../skeletons/SkeletonRoundCard';

Modal.setAppElement('#root');
function DoctorAppointmentComponent() {
  const [loading, setLoading] = useState(true);
  const currentDoctorId = useSelector((state) => state.currentDoctor.id);
  const [appointments, setAppointments] = useState([]);
  const deleteMsg = useSelector((state) => state.modal.delete);

  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true);
      const data = await getAppointments(currentDoctorId);
      setAppointments(data.appointment);
      setLoading(false);
    };
    fetchMessage();

    return () => {
      setAppointments();
    };
  }, [currentDoctorId, deleteMsg]);

  return (
    <div className='container'>
      <div className='message'>
        {appointments && appointments.length === 0 && <h2 className='title'>No appointments</h2>}
        {appointments && appointments.length !== 0 && <h2 className='title'>appointments</h2>}
      </div>
      <div className='card-container'>
        {loading && [1, 2, 3, 4, 5].map((n) => <RoundSkeletonCard key={n} />)}
        {appointments &&
          appointments.map((appointment) => (
            <CardComponent key={appointment._id} data={appointment} img={patientImg} />
          ))}
      </div>
    </div>
  );
}

export default DoctorAppointmentComponent;
