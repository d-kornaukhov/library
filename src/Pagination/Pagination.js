import React, { useState, useEffect } from 'react';

import IconFirstLast from '../assets/img/pagination-arrow-double.png'
import IconPrevNext from '../assets/img/pagination-arrow.png'

import './Pagination.scss';

export const Pagination = ({itemsPerPage, totalItems, onPageChange, visiblePages, hidePrevButton, hideNextButton, showFirstButton, showLastButton, IconFirst, IconNext}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    if (visiblePages === 0 || typeof visiblePages === 'undefined') {
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
          <button
            key={i}
            className={`PaginationPageButton ${currentPage === i ? 'PaginationPageButton_active' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      const halfVisiblePages = Math.floor(visiblePages / 2);

      let startPage = Math.max(1, currentPage - halfVisiblePages);
      let endPage = Math.min(totalPages, startPage + visiblePages - 1);

      if (endPage - startPage + 1 < visiblePages) {
        startPage = Math.max(1, endPage - visiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(
          <button
            key={i}
            className={`PaginationPageButton ${currentPage === i ? 'PaginationPageButton_active' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    }

    return pageButtons;
  };

  return (
    <div className="PaginationContainer">
      {showFirstButton && (
        <button
          className="PaginationPageButton PaginationPageButtonFirst"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <img src={IconFirst ? IconFirst : IconFirstLast} alt={'pagination button first'} />
        </button>
      )}

      {hidePrevButton ? null : (
          <button
              className={`PaginationPageButton PaginationPageButtonPrev`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
          >
            <img src={IconNext ? IconNext : IconPrevNext} alt={'pagination button prev'}/>
          </button>
      )}

      {renderPageButtons()}

      {hideNextButton ? null : (
          <button
              className="PaginationPageButton PaginationPageButtonNext"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
          >
            <img src={IconNext ? IconNext : IconPrevNext} alt={'pagination button next'}/>
          </button>
      )}

      {showLastButton && (
          <button
              className="PaginationPageButton PaginationPageButtonLast"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
          >
            <img src={IconFirst ? IconFirst : IconFirstLast} alt={'pagination button last'}/>
          </button>
      )}
    </div>
  );
};
