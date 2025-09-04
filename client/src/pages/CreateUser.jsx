import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { USERS_API_URL } from '../utils/api';

export default function CreateUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(USERS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age: parseInt(age, 10) }),
      });
      if (res.ok) {
        const user = await res.json();
        navigate(`/users/${user._id}`);
      } else {
        setMessage('Error creating user');
      }
    } catch (error) {
      setMessage('Error creating user');
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
