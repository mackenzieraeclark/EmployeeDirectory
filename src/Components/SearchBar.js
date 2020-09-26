import React from "react";
import "../style/SearchBar.css";

function SearchBar(props) {
    return (
        <form>
        <div className="form-group">
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            placeholder="Search by User Name..."
            id="search"
          />
        </div>
      </form>
    );
};

export default SearchBar;