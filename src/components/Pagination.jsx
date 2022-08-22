import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({
  pageCount,
  handlePageClick,
  onPageActive,
  renderOnZeroPageCount,
  pageRangeDisplayed = 2,
  marginPagesDisplayed = 1,
  nextLabel,
  previousLabel,
  breakLabel,
  className,
  activeClassName,
  pageClassName,
  breakClassName,
  itemsContainerClassName,
}) {
  return (
    <ReactPaginate
      onPageChange={handlePageClick}
      pageCount={pageCount}
      nextLabel={nextLabel}
      previousLabel={previousLabel}
      breakLabel={breakLabel}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      renderOnZeroPageCount={renderOnZeroPageCount}
      className={className}
    />
  );
}

export default Pagination;
