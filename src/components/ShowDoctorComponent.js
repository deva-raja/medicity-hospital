import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { showDoctor } from '../api/doctorApi';
import doctorImg from '../images/doctor_filler.jpg';
import CardComponent from './DoctorCardComponent';
import SkeletonCard from '../skeletons/SkeletonCard';

function ShowDoctorComponent() {
  const [doctor, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchName = useSelector((state) => state.search.name);
  const searchSpeciality = useSelector((state) => state.search.speciality);
  const shouldSearch = useSelector((state) => state.search.search);

  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true);
      const data = await showDoctor({ speciality: searchSpeciality, name: searchName });
      setDoctors(data.doctor);
      setLoading(false);
    };
    fetchMessage();

    return () => {
      setDoctors();
    };
  }, [shouldSearch, searchSpeciality]);
  console.log(doctor);

  return (
    <div className='container'>
      <div className='card-container'>
        {loading && [1, 2, 3, 4, 5].map((n) => <SkeletonCard key={n}  />)}
        {doctor &&
          doctor.map((message) => (
            <CardComponent key={message._id} data={message} img={doctorImg} />
          ))}
      </div>
    </div>
  );
}

export default ShowDoctorComponent;
