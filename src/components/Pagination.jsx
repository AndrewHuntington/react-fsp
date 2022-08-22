import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Pagination({
  data,
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
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="Pagination__items-container">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <div key={index} className="Pagination__item">
              {item}
            </div>
          ))
        ) : (
          <div>
            <p>There are no items to display.</p>
          </div>
        )}
      </div>

      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={pageCount}
        nextLabel={nextLabel}
        previousLabel={previousLabel}
        breakLabel={breakLabel}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
      />
    </>
  );
}

export default Pagination;
