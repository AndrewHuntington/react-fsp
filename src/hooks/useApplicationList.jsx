import { useEffect, useState } from "react";
import axios from "axios";

function useApplicationList({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [applications, setApplications] = useState([]);
  const [applicationsDataRaw, setApplicationsDataRaw] = useState([]);

  useEffect(() => {
    const getApplications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3100/api/applications"
        );
        const responseData = response.data;
        setApplicationsDataRaw(responseData.applications);
      } catch (err) {
        console.log("err", err);
      }
    };

    getApplications();
  }, []);

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
    setApplications,
    applicationsDataRaw,
  };
}

export default useApplicationList;
