import React, {Component} from 'react';
import './App.css';
import SearchBar from '../search_bar/SearchBar';
import BusinessList from '../business_list/BusinessList';

const business = {
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

const businesses = Array(12).fill(business);

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="."><h1>ravenous</h1></a>
        <SearchBar />
        <BusinessList items={businesses}/>
      </div>
    );
  }
}

export default App;
