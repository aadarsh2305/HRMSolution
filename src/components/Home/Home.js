import React from 'react'
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { instance } = useMsal();
  const navigate = useNavigate();

  const login = async () => {
    try {
      await instance.loginPopup({
        scopes: ["User.Read"],
      });
      navigate("/welcome");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to My React App</h1>
      <button onClick={login} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Login with Microsoft
      </button>
    </div>
  )
}

export default Home