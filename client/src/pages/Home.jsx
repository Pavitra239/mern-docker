import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/create-user');
  };

  const handleViewUsers = () => {
    navigate('/users');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Home Page</h1>
      <button
        onClick={handleRegister}
        style={{ padding: '10px 20px', fontSize: '16px', marginRight: '16px' }}
      >
        Register
      </button>
      <button
        onClick={handleViewUsers}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        View Users
      </button>
    </div>
  );
};

export default Home;
