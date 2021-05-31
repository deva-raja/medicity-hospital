import React from 'react';
import { Link } from 'react-router-dom';
// import video from '../videos/hospital_bg.mp4';
import img from '../images/doctor_child.png';
import { useSpring, animated } from 'react-spring';

function LandingBodyComponent() {
  const anim1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 285,
    config: { tension: 220, friction: 120 },
  });
  const anim2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 671,
    config: { tension: 220, friction: 120 },
  });
  const anim3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1157,
    config: { tension: 220, friction: 120 },
  });
  const anim4 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1842,
    config: { tension: 220, friction: 120 },
  });
  const anim5 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2328,
    config: { tension: 220, friction: 120 },
  });
  const anim6 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2714,
    config: { tension: 220, friction: 120 },
  });
  const anim7 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3100,
    config: { tension: 220, friction: 220 },
  });

  return (
    <>
      <img className='bg-video' src={img} alt='doctor_child' />
      {/* <video class='bg-video' src={video} autoPlay loop muted></video> */}
      <div className='content'>
        <div className='content-wrapper'>
          <h2>
            <animated.span style={anim1}> Putting </animated.span>
            <animated.span style={anim2}> patients </animated.span>
            <animated.span style={anim3}> first </animated.span>
          </h2>
          <h3>
            <animated.span style={anim4}> we're </animated.span>
            <animated.span style={anim5}> here </animated.span>
            <animated.span style={anim6}> for </animated.span>
            <animated.span style={anim7}> you </animated.span>
          </h3>
          <p>
            A decade ago, we made a commitment to be the best provider of health care services.
            We’ve kept it.
          </p>
          <Link to='/appointment'>schedule your appointment</Link>
        </div>
      </div>
    </>
  );
}

export default LandingBodyComponent;
