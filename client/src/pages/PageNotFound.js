import React from 'react';
import { useHistory } from 'react-router-dom';
import Image from '../assets/images/homer.gif';
import '../styles/PageNotFound.scss';

const PageNotFound = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  return (
    <>
      <div className='notFound_container'>
        <div className='notFound_objects'>
          <h1 className='notFound_title'>HEY! NO HAY NADA ACÁ!</h1>
          <img src={Image} alt='' className='notFound_image' />
          <button className='notFound__goHome' onClick={goHome}>
            Inicio
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
