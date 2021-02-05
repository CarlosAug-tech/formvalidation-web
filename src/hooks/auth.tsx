import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

// interface SignInCredentials {
//   email: string;
//   password: string;
// }

interface AuthCredentials {
  formData: object;
}

// interface SignUpCredentials {
//   name: string;
//   email: string;
//   password: string;
// }

interface AuthContextData {
  user: object;
  signIn(credentials: AuthCredentials): Promise<void>;
  signUp(credentials: AuthCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('Formvalidation:token');
    const user = localStorage.getItem('Formvalidation:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ formData }) => {
    const { email, password } = formData;

    const response = await api.post('/sessions', { email, password });
    const { token, user } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    localStorage.setItem('Formvalidation:token', token);
    localStorage.setItem('Formvalidation:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signUp = useCallback(async ({ formData }) => {
    const { name, email, password } = formData;

    await api.post('/users', { name, email, password });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('Formvalidation:token');
    localStorage.removeItem('Formvalidation:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signUp, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
