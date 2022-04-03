import React from "react";

const SearchBar = ({ searchedValue, setSearchedValue }) => {
  return (
    <div className="w-50 pb-4">
      <div className="input-group shadow-sm border rounded py-1">
        <input
          type="search"
          placeholder="E.g: techno, house, relax&#8230;"
          className="form-control border-0 bg-white"
          value={searchedValue}
          onChange={(event) => setSearchedValue(event.target.value)}
        />
        <button type="submit" className="btn btn-search me-2" />
      </div>
    </div>
  );
};

export default SearchBar;
