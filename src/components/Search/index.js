import React from "react";
import "./search.css";

class Search extends React.Component {
  render() {
    return (
      <section className="container">
        <h2>Teacher Dashboard</h2>
        <h4>Classes</h4>
        <i className="fa fa-search" />
        <input type="text" className="search-input" placeholder="search" />
      </section>
    );
  }
}
export default Search;
