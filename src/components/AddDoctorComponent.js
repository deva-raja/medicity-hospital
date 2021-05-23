import React, { useState } from 'react';
import axios from 'axios';

function AddDoctorComponent() {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    console.log(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(res);
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      console.log({ fileName, filePath });
      setMessage('File Uploaded');
    } catch (err) {
      console.log(err);
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
        console.log(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
  };

  return (
    <div className='container'>
      <form className='form' id='a-form' onSubmit={onSubmit}>
        <h2 className='form_title title'>add doctor</h2>
        <input className='form__input' type='text' placeholder='Name' />
        <input className='form__input' type='email' placeholder='Email' />
        <input className='form__input' type='password' placeholder='Password' />
        <input className='form__input' type='text' placeholder='Speciality' />
        <input className='form__input' type='text' placeholder='Phone Number (optional)' />
        <input className='form__input' name='file' type='file' onChange={onChange} />
        <input className='form__input' type='text' placeholder='Select Image (optional)' />
        <button type='submit' className='form__button button submit'>
          add
        </button>
      </form>
    </div>
  );
}

export default AddDoctorComponent;
