import cardData from "./data/data";
import { useEffect, useState } from "react";

function Card({ name, created, status }) {
  return (
    <div className=" max-w-fit">
      <div className="border border-red-500 rounded">
        <h1>{name}</h1>
        <p>{created}</p>
        <p>{status}</p>
      </div>
    </div>
  );
}

function App() {
  const [filteredList, setFilteredList] = useState(cardData);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const sortByCreated = (filteredData) => {
    if (!selectedSort) {
      return filteredData;
    }

    // ! NOTE: sort() sorts element of an array in place
    // ! unlike map() which returns a new array
    const dataCopy = [...filteredData];

    const sortedData = dataCopy.sort((a, b) => {
      // * Old code kept for reference
      // a = a.created.split("-").join("");
      // b = b.created.split("-").join("");
      a = new Date(a.created);
      b = new Date(b.created);

      // sort by date oldest first (ascending)
      if (selectedSort === "oldest") {
        // return a.localeCompare(b);
        return a - b;
      }
      // sort by date newest first (descending)
      if (selectedSort === "newest") {
        // return b.localeCompare(a);
        return b - a;
      }

      return dataCopy;
    });

    console.log(sortedData);

    return sortedData;
  };

  const handleSort = (e) => {
    setSelectedSort(e.target.value);
  };

  const filterByStatus = (filteredData) => {
    if (!selectedFilter) {
      return filteredData;
    }

    // ! NOTE: filter() creates a shallow copy of a portion of an array
    const filteredApps = filteredData.filter(
      (app) => app.status === selectedFilter
    );
    return filteredApps;
  };

  const handleFilter = (e) => {
    setSelectedFilter(e.target.value);
  };

  useEffect(() => {
    let filteredData = filterByStatus(cardData);
    filteredData = sortByCreated(filteredData);
    setFilteredList(filteredData);
  }, [selectedFilter, selectedSort]);

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

      {filteredList &&
        filteredList.map((item, index) => (
          <Card
            name={item.name}
            created={item.created}
            status={item.status}
            key={index}
          />
        ))}
    </div>
  );
}

export default App;
