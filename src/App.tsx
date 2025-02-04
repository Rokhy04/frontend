import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function AppContent() {
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    // Initialize default admin user if none exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.length === 0) {
      localStorage.setItem(
        'users',
        JSON.stringify([
          {
            username: 'admin',
            password: 'admin123',
            isAdmin: true,
          },
        ])
      );
    }
  }, []);

  if (!isAuthenticated || !user) {
    return <LoginForm />;
  }

  return <Dashboard />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;