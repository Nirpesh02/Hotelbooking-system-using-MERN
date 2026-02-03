/**
 * Authentication Context
 * Manages user authentication state across the application
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if Firebase is configured
  const isFirebaseAvailable = auth && googleProvider;

  // Listen to authentication state changes
  useEffect(() => {
    if (!isFirebaseAvailable) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName || firebaseUser.email.split('@')[0],
          email: firebaseUser.email,
          avatar: firebaseUser.photoURL || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
          phone: firebaseUser.phoneNumber || null,
        });
      } else {
        // User is signed out
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isFirebaseAvailable]);

  // Email/Password login
  const login = async (email, password) => {
    if (!isFirebaseAvailable) {
      // Fallback to mock authentication
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({
        id: 'user-123',
        name: 'Guest User',
        email: email,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      });
      return true;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Google login
  const loginWithSocial = async (provider) => {    if (!isFirebaseAvailable) {
      // Fallback to mock social authentication
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({
        id: 'user-social-123',
        name: `${provider} User`,
        email: `user@${provider.toLowerCase()}.com`,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      });
      return true;
    }
    if (provider !== 'google') {
      throw new Error('Only Google authentication is supported');
    }

    try {
      const result = await signInWithPopup(auth, googleProvider);
      return true;
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  };

  // Registration
  const register = async (name, email, password, phone) => {
    if (!isFirebaseAvailable) {
      // Fallback to mock registration
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({
        id: 'user-new-' + Date.now(),
        name,
        email,
        phone,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      });
      return true;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      // Update the user profile with display name
      await result.user.updateProfile({
        displayName: name,
      });

      return true;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    if (!isFirebaseAvailable) {
      // Fallback to mock logout
      setUser(null);
      return;
    }

    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Update user profile
  const updateProfile = (updates) => {
    setUser((prevUser) =>
      prevUser ? { ...prevUser, ...updates } : prevUser
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        loginWithSocial,
        register,
        logout,
        updateProfile,
        isFirebaseAvailable,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
