import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({
  pageCount,
  onPageChange,
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
      onPageChange={onPageChange}
      pageCount={pageCount}
      nextLabel={nextLabel}
      previousLabel={previousLabel}
      breakLabel={breakLabel}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      renderOnZeroPageCount={renderOnZeroPageCount}
      className={className}
      activeClassName={activeClassName}
    />
  );
}

export default Pagination;
