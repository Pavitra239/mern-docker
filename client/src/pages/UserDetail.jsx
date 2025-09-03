import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { USERS_API_URL } from '../utils/api';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <p>Email: {user.email}</p>
      {/* Add more fields as needed */}
    </div>
  );
}
