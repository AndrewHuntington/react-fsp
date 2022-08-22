import React, { useCallback, useState, useMemo, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import useApplicationList from "../hooks/useApplicationList";

function ApplicationList({ applicationsDataRaw }) {
  const [filteredList, setFilteredList] = useState(applicationsDataRaw);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [applications, setApplications] = useState([]);

  const itemsPerPage = 10;

  const { currentItems, handlePageClick, pageCount } = useApplicationList({
    applications,
    itemsPerPage,
  });

  const applicationsList = useMemo(
    () =>
      filteredList.map((item, index) => (
        <Card
          name={item.name}
          created={item.created}
          status={item.status}
          key={index}
        />
      )),
    [filteredList]
  );

  const sortByCreated = useMemo(
    () => (filteredData) => {
      console.log("sorting...");
      if (!selectedSort) {
        return filteredData;
      }

      // ! NOTE: sort() sorts element of an array in place
      // ! unlike map() which returns a new array
      const dataCopy = [...filteredData];

      const sortedData = dataCopy.sort((a, b) => {
        a = new Date(a.created);
        b = new Date(b.created);

        // sort by date oldest first (ascending)
        if (selectedSort === "oldest") {
          return a - b;
        }
        // sort by date newest first (descending)
        if (selectedSort === "newest") {
          return b - a;
        }

        return dataCopy;
      });

      return sortedData;
    },
    [selectedSort]
  );

  const handleSort = (e) => {
    setSelectedSort(e.target.value);
  };

  const filterByStatus = useMemo(
    () => (filteredData) => {
      if (!selectedFilter) {
        return filteredData;
      }

      // ! NOTE: filter() creates a shallow copy of a portion of an array
      const filteredApps = filteredData.filter(
        (app) => app.status === selectedFilter
      );
      return filteredApps;
    },
    [selectedFilter]
  );

  const handleFilter = (e) => {
    setSelectedFilter(e.target.value);
  };

  useEffect(() => {
    setApplications(applicationsList);
    console.log(applicationsList);
  }, [applicationsList]);

  useEffect(() => {
    let filteredData = filterByStatus(applicationsDataRaw);
    filteredData = sortByCreated(filteredData);
    setFilteredList(filteredData);
  }, [
    selectedFilter,
    selectedSort,
    filterByStatus,
    sortByCreated,
    applicationsDataRaw,
  ]);

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="date-sort">Sort by</label>
        <select
          name="date-sort"
          id="sort-input"
          onChange={(e) => handleSort(e)}
        >
          <option value="">Unsorted</option>
          <option value="oldest">Oldest</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="status-filter">Filter by</label>
        <select
          name="status-filter"
          id="filter-input"
          value={selectedFilter}
          onChange={(e) => handleFilter(e)}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="rejected">Rejected</option>
          <option value="review">Under Review</option>
        </select>
      </div>

      {/* Applications */}
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

      <Pagination
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        nextLabel=">"
        previousLabel="<"
        breakLabel="..."
        className="flex space-x-2"
      />
    </div>
  );
}

export default ApplicationList;
