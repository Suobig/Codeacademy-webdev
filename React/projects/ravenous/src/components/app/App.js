import React, {Component} from 'react';
import './App.css';
import SearchBar from '../search_bar/SearchBar';
import BusinessList from '../business_list/BusinessList';

class App extends Component {
  constructor(props) {
    super(props);
    this.business = {
      imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Laxville',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    }
  
    this.businesses = Array(12).fill("").map((_, index) => {
      const b = {...this.business }
      b.name += ` ${index + 1}`;
      return b;
    });
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    console.log(`Search Yelp for ${term} in ${location} sorted by ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <a href="."><h1>ravenous</h1></a>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList items={this.businesses}/>
      </div>
    );
  }
}

export default App;
