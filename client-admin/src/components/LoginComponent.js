import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setToken, setUsername: setContextUsername } = useContext(MyContext);

  const handleLogin = async () => {
    if (!username || !password) {
      alert('Please input username and password');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      console.log('LOGIN RESPONSE:', data);

      if (data.success === true) {
        // save token to localStorage
        if (data.token) {
          localStorage.setItem('admin_token', data.token);
          // save token to context
          setToken(data.token);
          setContextUsername(username);
        }

        alert('Login success');
        navigate('/home');
      } else {
        alert('Login failed: ' + (data.message || 'Invalid username or password'));
      }

    } catch (err) {
      console.error(err);
      alert('Server error');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!username || !password) {
      alert('Please input username and password');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      console.log('REGISTER RESPONSE:', data);

      if (data.success === true) {
        alert('Admin created successfully! Please login');
        setIsRegister(false);
        setUsername('');
        setPassword('');
      } else {
        alert('Register failed: ' + (data.message || 'Error'));
      }

    } catch (err) {
      console.error(err);
      alert('Server error');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '100px',
      fontFamily: 'Arial, sans-serif'
    },
    inputBox: {
      margin: '10px',
      padding: '10px',
      width: '250px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px'
    },
    button: {
      margin: '10px 5px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px'
    },
    toggleButton: {
      margin: '10px 5px',
      padding: '10px 20px',
      fontSize: '14px',
      cursor: 'pointer',
      backgroundColor: '#6c757d',
      color: 'white',
      border: 'none',
      borderRadius: '4px'
    }
  };

  return (
    <div style={styles.container}>
      <h2>{isRegister ? 'ADMIN REGISTER' : 'ADMIN LOGIN'}</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={styles.inputBox}
      /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={styles.inputBox}
      /><br />

      <button
        onClick={isRegister ? handleRegister : handleLogin}
        disabled={loading}
        style={styles.button}
      >
        {loading ? 'Loading...' : (isRegister ? 'REGISTER' : 'LOGIN')}
      </button>

      <button
        onClick={() => {
          setIsRegister(!isRegister);
          setUsername('');
          setPassword('');
        }}
        style={styles.toggleButton}
      >
        {isRegister ? 'Back to Login' : 'Create Account'}
      </button>
    </div>
  );
}

export default LoginComponent;
