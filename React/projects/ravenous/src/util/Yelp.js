import { yelpApiKey } from "./secret";

const Yelp = {
  search(term, location, sortBy) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
    const options = {
      headers: {
        Authorization: `Bearer ${yelpApiKey}`
      }
    };
    const convertResponse = response => response.json();
    const parseRespose = json => {
      if (json.businesses) {
        return json.businesses.map(b => {
          const address1 = b.location.address1 ? b.location.address1 : "";
          const address2 = b.location.address2 ? b.location.address2 : "";
          const address3 = b.location.address3 ? b.location.address3 : "";
          const address = `${address1} ${address2} ${address3}`.trim();
          const categories = b.categories.map(item => item.title).join(', ');
          return {
            id: b.id,
            imageSrc: b.image_url,
            name: b.name,
            address: address,
            city: b.location.city,
            state: b.location.state,
            zipCode: b.location.zip_code,
            category: categories,
            rating: b.rating,
            reviewCount: b.review_count
          }
        });
      } else {
        return [];
      }
    };
    return fetch(url, options)
    .then(convertResponse)
    .then(parseRespose);
  }
}

export default Yelp;