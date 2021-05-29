import { useEffect, useState } from 'react';
import { showDoctor } from '../api/doctorApi';
import doctorImg from '../images/doctor_filler.jpg';
import CardComponent from './DoctorCardComponent';

function ShowDoctorComponent() {
  const [doctor, setDoctors] = useState([]);

  useEffect(() => {
    const fetchMessage = async () => {
      const data = await showDoctor();
      console.log(data);
      setDoctors(data.doctor);
    };
    fetchMessage();

    return () => {
      setDoctors();
    };
  }, []);
  console.log(doctor);

  return (
    <div className='container'>
      <div className='card-container'>
        {doctor &&
          doctor.map((message) => (
            <CardComponent key={message._id} data={message} img={doctorImg} />
          ))}
      </div>
    </div>
  );
}

export default ShowDoctorComponent;
