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
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
          );
        },
      });

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
  };

  return (
    <div class='container'>
      <form class='form' id='a-form' onSubmit={onSubmit}>
        <h2 class='form_title title'>add doctor</h2>
        <input class='form__input' type='text' placeholder='Name' />
        <input class='form__input' type='email' placeholder='Email' />
        <input class='form__input' type='password' placeholder='Password' />
        <input class='form__input' type='text' placeholder='Speciality' />
        <input class='form__input' type='text' placeholder='Phone Number (optional)' />
        <input class='form__input' type='file' onChange={onChange} />
        <input class='form__input' type='text' placeholder='Select Image (optional)' />
        <button type="submit" class='form__button button submit'>add</button>
      </form>
    </div>
  );
}

export default AddDoctorComponent;
