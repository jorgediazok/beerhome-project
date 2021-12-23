import React from 'react';
import '../styles/Testimonials.scss';

const Testimonial = ({ text, image, name, profession }) => {
  return (
    <div className='col-sm-4'>
      <div className='card text-center'>
        <div className='content'>
          <div className='text'>{text}</div>
        </div>
        <div className='author'>
          <div className='image'>
            <img src={image} alt='' className='img-responsive' />
          </div>
          <div className='details'>
            <h2>
              {name}
              <br />
              <span>{profession}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
