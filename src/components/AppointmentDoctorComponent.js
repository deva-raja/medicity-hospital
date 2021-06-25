import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeSpeciality, search, changeTyping } from '../redux/searchSlice';
import ShowDoctorComponent from './ShowDoctorComponent';
import { useLocation } from 'react-router-dom';

function AppointmentDoctorComponent({ text }) {
   const dispatch = useDispatch();

   const searchName = useSelector((state) => state.search.name);
   const searchSpeciality = useSelector((state) => state.search.speciality);
   const location = useLocation();
   const path = location.pathname;

   const handleChange = (e) => {
      dispatch(changeName(e.target.value));
      dispatch(changeTyping(true));
   };

   const handleClick = () => {
      dispatch(search());
      dispatch(changeTyping(false));
   };

   useEffect(() => {
      dispatch(changeTyping(false));
   }, [path, dispatch]);

   return (
      <div className='container'>
         <div className='search-wrapper'>
            <h1>{text}</h1>
            <div className='form-wrapper'>
               <input
                  type='text'
                  className='form__input'
                  placeholder='search by doctor name'
                  onChange={handleChange}
                  value={searchName}
               />
               <button className='button  small-button' onClick={() => handleClick()}>
                  search
               </button>
            </div>
         </div>
         <div className='search-results'>
            <div>
               <select
                  className='form__input search'
                  value={searchSpeciality}
                  onChange={(e) => dispatch(changeSpeciality(e.target.value))}
               >
                  <option className='form__input' value='' label='Select Speciality' disabled />
                  <option className='form__input' value='' label='All Specialities' />
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
