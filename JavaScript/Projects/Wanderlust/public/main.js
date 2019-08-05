import {clientId, clientSecret, apiKey} from './secret.js';

// Foursquare API Info
const url = 'https://api.foursquare.com/v2/venues/explore';

// APIXU Info
const forecastUrl = 'https://api.apixu.com/v1/forecast.json';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];

// Add AJAX functions here:
const getVenues = async() => {
  const city = $input.val();
  const urlToFetch = `${url}?client_id=${clientId}&client_secret=${clientSecret}&near=${city}&limit=10&v=20190804`;
  try {
    const response = await fetch(urlToFetch);
    
    if (response.ok) {
      const responseJson = await response.json();
      const venues = responseJson.response.groups[0].items.map(item => item.venue);
      console.log(venues);
      return venues;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.error(error);
    
  }
}

const getForecast = async () => {
  const urlToFetch = `${forecastUrl}?key=${apiKey}&q=${$input.val()}&days=4&hour=11`
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const responseJson = await response.json();
      const days = responseJson.forecast.forecastday
      console.log(days);
      return days;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.error(error);
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueIconUrl = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(venue.name, venue.location, venueIconUrl);
    $venue.append(venueContent);
  });
}

const renderForecast = (days) => {
  $weatherDivs.forEach(($day, index) => {
    // Add your code here:
    const day = days[index]
    console.log(day);
    let weatherContent = createWeatherHTML(day);
    $day.append(weatherContent);
  });
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues));
  getForecast().then(days => renderForecast(days));
  return false;
}

$submit.click(executeSearch)
