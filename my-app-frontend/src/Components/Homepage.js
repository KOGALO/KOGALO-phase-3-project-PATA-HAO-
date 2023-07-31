import React, { useState } from 'react';

const featuredHousesData = [
  {
    id: 1,
    title: 'Spacious Villa with Garden',
    location: 'Ruiru',
    price: 60000,
    bedrooms: 4,
  },
  {
    id: 2,
    title: 'Cozy One Bedroom Fully furnished',
    location: 'Langata',
    price: 25000,
    bedrooms: 1,
  },
  {
    id: 3,
    title: 'Two Bedroom all ensuite fully furnished',
    location: 'Ruiru',
    price: 40000,
    bedrooms: 2,
  },
  {
    id: 4,
    title: 'Spacious Sudio Apartments fully furnished',
    location: 'Kilimani',
    price: 20000,
    bedrooms: 1,
  },
  
];

const HomePage = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [bedroomsFilter, setBedroomsFilter] = useState('');

  const handleSearch = () => {
    console.log('Location:', locationFilter);
    console.log('Price:', priceFilter);
    console.log('Bedrooms:', bedroomsFilter);
  };

  return (
    <div>
      <h1>Welcome to our House Rental Website!</h1>

      {/Search Filters /}
      <div>
        <input
          type="text"
          placeholder="Location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Bedrooms"
          value={bedroomsFilter}
          onChange={(e) => setBedroomsFilter(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/Featured Houses /}
      <h2>Featured Houses</h2>
      <div>
        {featuredHousesData.map((house) => (
          <div key={house.id}>
            <h3>{house.title}</h3>
            <p>Location: {house.location}</p>
            <p>Price: ${house.price}/month</p>
            <p>Bedrooms: {house.bedrooms}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
