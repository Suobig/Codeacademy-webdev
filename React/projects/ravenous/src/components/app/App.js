import React, {Component} from 'react';
import './App.css';
import SearchBar from '../search_bar/SearchBar';
import BusinessList from '../business_list/BusinessList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="."><h1>ravenous</h1></a>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
