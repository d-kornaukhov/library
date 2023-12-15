import React, { useState, useEffect } from 'react';
import './Pagination.scss';

export const Pagination = ({itemsPerPage, totalItems, onPageChange, visiblePages, hidePrevButton, hideNextButton, showFirstButton, showLastButton,}) => {
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
          &lt;&lt;
        </button>
      )}

      {hidePrevButton ? null : (
        <button
          className={`PaginationPageButton PaginationPageButtonPrev`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
      )}

      {renderPageButtons()}

      {hideNextButton ? null : (
      <button
        className="PaginationPageButton PaginationPageButtonNext"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
      )}

      {showLastButton && (
        <button
          className="PaginationPageButton PaginationPageButtonLast"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &gt;&gt;
        </button>
      )}
    </div>
  );
};
