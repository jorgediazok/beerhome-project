import React from 'react';
import '../styles/Pagination.scss';

const Pagination = ({ beersPerPage, totalBeers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBeers / beersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        <button
          onClick={() => paginate(pageNumbers - 1)}
          className='page__link'
        >
          {'<'}
        </button>
        {pageNumbers.map((number, index) => (
          <li key={index} className='page__item'>
            <button onClick={() => paginate(number)} className='page__link'>
              {number}
            </button>
          </li>
        ))}
        <button
          onClick={() => paginate(pageNumbers + 1)}
          className='page__link'
        >
          {'>'}
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
