import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from './firebase'; 
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(''); 
      setSuccessMessage('Login successful!'); // Set success message
    } catch (err) {
      setError(err.message); 
      setSuccessMessage(''); // Clear success message on error
    }
  };

  return (
    <div>
      <h2>Educator Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Display success message */}
    </div>
  );
};

export default SignIn;
