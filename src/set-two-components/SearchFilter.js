import React from "react";

export function SearchFilter({ q, setQ }) {
  return (
    <div className="search-filter">
      <div className="nav-bar--search">
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search"
        />
      </div>


      {/* <div className="nav-bar--filter">
      <select name="categories" id="categories">
        <option value="">All</option>
        <option value="city">City</option>
        <option value="cluster">Cluster</option>
      </select>
    </div> */}
    </div>


    
    
  );
}
