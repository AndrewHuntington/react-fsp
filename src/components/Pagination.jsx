import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({
  pageCount,
  handlePageClick,
  onPageActive,
  renderOnZeroPageCount,
  pageRangeDisplayed = 2,
  marginPagesDisplayed = 1,
  className,
  activeClassName,
  pageClassName,
  breakClassName,
  nextLabel,
  previousLabel,
  breakLabel,
  itemsPerPage,
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
    />
  );
}

export default Pagination;
