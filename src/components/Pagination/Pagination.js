import React from 'react';

//Style
import styles from './PaginationStyle.module.css';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className={styles.container}>
        {pageNumbers.map((number) => (
          <div
            key={number}
            className={currentPage === number ? styles.activePage : ''}
          >
            <button
              className={styles.paginationItem}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
