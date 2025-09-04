import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { USERS_API_URL } from '../utils/api';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${USERS_API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>User Detail</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
        onClick={() => navigate('/create-user')}
      >
        Register New User
      </button>
      {/* Add more fields as needed */}
    </div>
  );
}
