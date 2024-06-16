
// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // alert(token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('/api/auth-check')
        .then(response => {
          setIsAuthenticated(response.data.authenticated);
           alert(response.data.authenticated);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error checking authentication', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  },[]);

  const login = (credentials) => {
    // axios.get('/sanctum/csrf-cookie');
    return axios.post('http://localhost:8000/api/login', credentials)
      .then(response => {
        const token = response.data.access_token;
        localStorage.setItem('token', token);
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setIsAuthenticated(true);
        return response;
      });
  };

  const logout = () => {
    const token = localStorage.getItem('token');
    // alert(token);
    return axios.post('http://localhost:8000/api/logout', {}, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        // alert('Helo sent')
        setIsAuthenticated(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout successful",
          showConfirmButton: false,
          timer: 2000,
      });
      
      });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};