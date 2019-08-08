import React, {Component} from 'react';
import './App.css';
import Yelp from '../../util/Yelp'
import SearchBar from '../search_bar/SearchBar';
import BusinessList from '../business_list/BusinessList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy)
        .then(result => {
          this.setState({
            businesses: result
          })
        });
  }

  render() {
    return (
      <div className="App">
        <a href="."><h1>ravenous</h1></a>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList items={this.state.businesses}/>
      </div>
    );
  }
}

export default App;
