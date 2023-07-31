import React, { useState } from 'react';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhone_number(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('PhoneNumber:', phone_number);

    setName('');
    setEmail('');
    setPhone_number('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label>phone_number:</label>
        <input type="text" value={phone_number} onChange={handlePhoneNumberChange} required />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;

