import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdatelanlordForm = () => {
  const [landlords, setLandlords] = useState([]);
  const [newLandlord, setNewLandlord] = useState('');

  useEffect(() => {
    fetchLandlords();
  }, []);

  const fetchLandlords = async () => {
    try {
      const response = await axios.get('/landlords'); 
      setLandlords(response.data);
    } catch (error) {
      console.error('Error fetching landlords:', error);
    }
  };

  const handleAddLandlord = async () => {
    try {
      const response = await axios.post('/landlords', { name: newLandlord });
      setNewLandlord('');
      setLandlords([...landlords, response.data]);
    } catch (error) {
      console.error('Error adding landlord:', error);
    }
  };

  const handleDeleteLandlord = async (id) => {
    try {
      await axios.delete(`/landlords/${id}`);
      setLandlords(landlords.filter((landlord) => landlord.id !== id));
    } catch (error) {
      console.error('Error deleting landlord:', error);
    }
  };

  return (
    <div>
      <h2>Existing Landlords</h2>
      <ul>
        {landlords.map((landlord) => (
          <li key={landlord.id}>
            {landlord.name}{' '}
            <button onClick={() => handleDeleteLandlord(landlord.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add New Landlord</h2>
      <input
        type="text"
        value={newLandlord}
        onChange={(e) => setNewLandlord(e.target.value)}
      />
      <button onClick={handleAddLandlord}>Add Landlord</button>
    </div>
  );
};

export default UpdatelanlordForm;

