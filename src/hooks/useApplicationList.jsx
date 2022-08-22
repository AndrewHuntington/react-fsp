import { useEffect, useState } from "react";

function useApplicationList({ applications, itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(applications);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(applications.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(applications.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, applications]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % applications.length;
    setItemOffset(newOffset);
  };

  return {
    currentItems,
    handlePageClick,
    pageCount,
  };
}

export default useApplicationList;
