import React from 'react';
import Image from '../../assets/images/beer2.jpeg';
import Image2 from '../../assets/images/beer3.jpeg';
import '../../styles/About.scss';

const About = () => {
  return (
    <section>
      <div className='about wrapper'>
        <div className='container'>
          <h1 className='about__title'>Nuestra Historia</h1>
          <div className='row align-items-center'>
            <div className='col-lg-7 col-md-12 mb-lg-0 mb-5'>
              <div className='card border-0'>
                <img src={Image} alt='' className='img-fluid about__image' />
              </div>
            </div>
            <div className='col-lg-5 col-md-12 text-secondary'>
              <h2>Desde hace 5 años llevando a tu casa la mejor cerveza</h2>
              <p>
                Beerhouse nace como el proyecto de 5 amigos que, cansados de
                consumir siempre las mismas 5 marcas de cerveza decidieron
                comenzar a importarlas de todo el mundo y no sólo eso, también
                llevártelas.
              </p>
              <button className='main-btn mt-4'>Leer Más</button>
            </div>
          </div>
        </div>
        <div className='container about-type'>
          <div className='row align-items-center'>
            <div className='col-lg-5 col-md-12 text-secondary mb-lg-0 mb-5'>
              <h2>Calidad y Servicio</h2>
              <p>
                Realizá tu pedido ahora, si vivís en Buenos Aires obtenélo en tu
                casa dentro de las próximas 24 horas. Hacemos envíos a todo el
                país, consultá los plazos de entrega.
              </p>
              <ul className='list-unstyled py-3'>
                <li>Cervezas de todo el mundo</li>
                <li>Ofertas todas las semanas</li>
                <li>Envío dentro de 24 horas</li>
              </ul>
              <button className='main-btn mt-4'>Leer Más</button>
            </div>
            <div className='col-lg-7 col-md-12'>
              <div className='card border-8'>
                <img src={Image2} alt='' className='img-fluid about__image2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
