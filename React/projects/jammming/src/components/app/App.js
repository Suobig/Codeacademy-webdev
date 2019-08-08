import React from 'react';
import './App.css';
import SearchBar from '../search_bar/SearchBar';
import SearchResults from '../search_results/SearchResults';
import Playlist from '../playlist/Playlist';

function App() {
  return (
  <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div class="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  </div>
  );
}

export default App;
