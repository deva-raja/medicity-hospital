import React from 'react';

function AddDoctorComponent() {
  return (
    <div class='container'>
      <form class='form' id='a-form' method='' action=''>
        <h2 class='form_title title'>add doctor</h2>
        <input class='form__input' type='text' placeholder='Name' />
        <input class='form__input' type='email' placeholder='Email' />
        <input class='form__input' type='password' placeholder='Password' />
        <input class='form__input' type='text' placeholder='Speciality' />
        <input class='form__input' type='text' placeholder='Phone Number (optional)' />
        <input class='form__input' type='file' />
        <input class='form__input' type='text' placeholder='Select Image (optional)' />
        <button class='form__button button submit'>add</button>
      </form>
    </div>
  );
}

export default AddDoctorComponent;
