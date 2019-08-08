import React, { Component } from "react";
import "./SearchResults.css";
import TrackList from '../track_list/TrackList';

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList />
      </div>
    );
  }
}

export default SearchResults;
