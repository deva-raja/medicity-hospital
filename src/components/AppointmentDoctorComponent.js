import React, { useState } from 'react';
import ShowDoctorComponent from './ShowDoctorComponent';

function AppointmentDoctorComponent() {
  const [speciality, setSpeciality] = useState('');
  return (
    <div className='container'>
      <div className='search-wrapper'>
        <h1>Find a doctor</h1>
        <div className='form-wrapper'>
          <input type='text' className='form__input' placeholder='search by doctor name' />
          <button className='button  small-button'>search</button>
        </div>
      </div>
      <div className='search-results'>
        <div>
          <select
            className='form__input search'
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
          >
            <option className='form__input' value='' label='Speciality' disabled />
            <option className='form__input' value='cardiology' label='Cardiology' />
            <option className='form__input' value='dermatology' label='Dermatology' />
            <option className='form__input' value='vaccination' label='Vaccination' />
            <option className='form__input' value='neurology' label='Neurology' />
          </select>
        </div>
        <div className='results'>
          <ShowDoctorComponent />
        </div>
      </div>
    </div>
  );
}

export default AppointmentDoctorComponent;
