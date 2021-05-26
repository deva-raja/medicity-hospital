import React from 'react';

function RemoveDoctorComponent() {
  return (
    <div className='container'>
      <form className='form' id='a-form' method='' action=''>
        <h2 className='form_title title'>remove doctor</h2>
        <input className='form__input' type='email' placeholder='Email' />
        <input className='form__input' type='password' placeholder='Password' />
        <button className='form__button button submit'>remove</button>
      </form>
    </div>
  );
}

export default RemoveDoctorComponent;
