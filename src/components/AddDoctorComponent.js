import React from 'react';

function AddDoctorComponent() {
  return (
    <div class='container'>
      <form class='form' id='a-form' method='' action=''>
        <h2 class='form_title title'>Create Account</h2>
        <input class='form__input' type='text' placeholder='Name' />
        <input class='form__input' type='text' placeholder='Email' />
        <input class='form__input' type='password' placeholder='Password' />
        <button class='form__button button submit'>SIGN UP</button>
      </form>
    </div>
  );
}

export default AddDoctorComponent;
