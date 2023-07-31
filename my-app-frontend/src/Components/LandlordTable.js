import React, { useEffect, useState } from 'react';
import LandlordTable from './LandlordTable';
import axios from 'axios';

const LandlordPage = () => {
  const [landlords, setLandlords] = useState([]);

  useEffect(() => {
    fetchLandlords();
  }, []);

  const fetchLandlords = async () => {
    try {
      const response = await axios.get('/api/landlords'); // Replace with your backend API endpoint to fetch landlords
      setLandlords(response.data);
    } catch (error) {
      console.error('Error fetching landlords:', error);
    }
  };

  return (
    <div>
      <h1>Landlords</h1>
      <LandlordTable landlords={landlords} />
    </div>
  );
};

export default LandlordPage;
