import React, { useState } from 'react';
import axios from 'axios';

function AddDoctorComponent() {
  return (
    <div className='container'>
      <form className='form' id='a-form'>
        <h2 className='form_title title'>add doctor</h2>
        <input className='form__input' type='text' placeholder='Name' />
        <input className='form__input' type='email' placeholder='Email' />
        <input className='form__input' type='password' placeholder='Password' />
        <input className='form__input' type='text' placeholder='Speciality' />
        <input className='form__input' type='text' placeholder='Phone Number (optional)' />
        <button type='submit' className='form__button button submit'>
          add
        </button>
      </form>
    </div>
  );
}

export default AddDoctorComponent;
