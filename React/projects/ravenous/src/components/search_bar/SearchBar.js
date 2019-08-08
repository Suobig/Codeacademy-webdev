import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count"
    };
    this.state = {
      term: "",
      location: "",
      sortBy: this.sortByOptions["Best Match"]
    };
  }

  getSortByClass(sortByOption) {
    // console.log({ arg: sortByOption, state: this.state.sortBy});
    
    return this.state.sortBy === sortByOption ? "active" : "";
  }

  handleSortByClick(sortByOptionValue) {    
    this.setState({ sortBy: sortByOptionValue });
  }

  renderSortByOption() {
    return Object.keys(this.sortByOptions).map(sortByOptionKey => {
      const sortByOptionValue = this.sortByOptions[sortByOptionKey];
      return (
        <li 
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByClick.bind(this, sortByOptionValue)}
        >
          {sortByOptionKey}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOption()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href=".">Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
