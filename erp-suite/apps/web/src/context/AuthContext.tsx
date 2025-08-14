import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAccessToken, refreshToken } from '../services/auth/tokens';
import axios from 'axios';

interface AuthContextType {
  isAuthenticated: boolean;
  accessToken: string | null;
  setAuth: (authData: any) => void;
  refreshTokenFn: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const setAuth = (authData: any) => {
    setIsAuthenticated(true);
    setAccessToken(authData.token);
    localStorage.setItem('accessToken', authData.token);
    localStorage.setItem('refreshToken', authData.refreshToken);
    localStorage.setItem('role', authData.role);
    localStorage.setItem('tenantId', authData.tenantId);
  };

  const refreshTokenFn = async () => {
    try {
      await refreshToken();
    } catch (error) {
      console.error('Failed to refresh token', error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    const validateToken = async () => {
      try {
        const token = getAccessToken();
        if (!token) throw new Error('Missing token');

        await axios.get('/api/v1/auth/validate', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setIsAuthenticated(true);
        setAccessToken(token);
      } catch (err) {
        console.error("Token validation failed", err);
        try {
          const newToken = await refreshToken();
          setIsAuthenticated(true);
          setAccessToken(newToken);
        } catch (refreshErr) {
          console.error("Refresh token also failed", refreshErr);
          setIsAuthenticated(false);
        }
      }
    };

    validateToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, accessToken, setAuth, refreshTokenFn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
};