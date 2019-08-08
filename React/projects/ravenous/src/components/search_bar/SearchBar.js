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
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? "active" : "";
  }

  handleSortByClick(sortByOptionValue) {
    this.setState({ sortBy: sortByOptionValue });
  }

  handleTermChange(e) {
    const newTerm = e.target.value;
    // console.log({newTerm});
    
    this.setState({ term: newTerm })
  }

  handleLocationChange(e) {
    const newLocation = e.target.value;
    // console.log({newLocation});
    
    this.setState({ location: newLocation });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    )
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
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a 
            href="." 
            onClick={this.handleSearch}
          >
            Let's Go
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
