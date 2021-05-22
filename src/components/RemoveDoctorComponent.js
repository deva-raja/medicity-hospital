import React from 'react';

function RemoveDoctorComponent() {
  return (
    <div class='container'>
      <form class='form' id='a-form' method='' action=''>
        <h2 class='form_title title'>remove doctor</h2>
        <input class='form__input' type='email' placeholder='Email' />
        <input class='form__input' type='password' placeholder='Password' />
        <button class='form__button button submit'>remove</button>
      </form>
    </div>
  );
}

export default RemoveDoctorComponent;
