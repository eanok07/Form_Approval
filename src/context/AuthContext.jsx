import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = not logged in

  const login = (role) => {
    setUser({ role });
    localStorage.setItem('userRole', role); // Persist role
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userRole');
  };

  // Check localStorage on initial load
  useState(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) setUser({ role: savedRole });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};