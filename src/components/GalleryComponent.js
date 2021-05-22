import React from 'react';
import video from '../videos/hospital_bg.mp4';
import img from '../images/doctor_child.png';

function GalleryComponent() {
  return (
    <>
      <img class='bg-video' src={img} alt='doctor_child' />
      {/* <video class='bg-video' src={video} autoPlay loop muted></video> */}
    </>
  );
}

export default GalleryComponent;
