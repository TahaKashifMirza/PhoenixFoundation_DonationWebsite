// src/auth/useAuth.js
import { createContext, useContext, useState } from 'react';

// Create a Context for Auth
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const storeTokenInLS = (token) => {
    localStorage.setItem('authToken', token);
    setAuth(token);
  };

  return (
    <AuthContext.Provider value={{ auth, storeTokenInLS }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
