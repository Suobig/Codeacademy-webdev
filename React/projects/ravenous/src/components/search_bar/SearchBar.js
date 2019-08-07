import React, {Component} from 'react';
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
}

class SearchBar extends Component {
  renderSortByOption() {
    return (
      Object.keys(sortByOptions).map(option => {
        const apiKey = sortByOptions[option];
        return <li key={apiKey}>{option}</li>
      })
    );
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOption()}
          </ul>
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