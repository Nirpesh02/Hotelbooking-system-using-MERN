import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { auth, googleProvider } from "../firebase";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Start loading as true
  const [loading, setLoading] = useState(true);

  // Firebase availability check
  const isFirebaseAvailable = !!auth && !!googleProvider;

  //  Auth listener
  useEffect(() => {
    if (!isFirebaseAvailable) {
      // No Firebase → stop loading safely
      setTimeout(() => setLoading(false), 0);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
  id: firebaseUser.uid,
  name:
    firebaseUser.displayName ||
    firebaseUser.email?.split("@")[0],
  email: firebaseUser.email,
  avatar:
    firebaseUser.photoURL ??
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
  phone: firebaseUser.phoneNumber ?? null,
});

      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [isFirebaseAvailable]);

  //  Email Login
  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  };

  //  Google Login
 const loginWithSocial = async (provider) => {
  if (provider !== "google") {
    throw new Error("Provider not supported");
  }

  const result = await signInWithPopup(auth, googleProvider);

  // Update user profile if Google provides photo
  await updateProfile(result.user, {
    displayName: result.user.displayName,
    photoURL: result.user.photoURL,  // 🔥 photoURL captured here
  });

  return result.user;
};

  //  Register
  const register = async (name, email, password) => {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    //  Correct way to update profile
    await updateProfile(result.user, {
      displayName: name,
    });

    return true;
  };

  //  Logout
  const logout = async () => {
    await signOut(auth);
    setUser(null);
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
        isFirebaseAvailable,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => useContext(AuthContext);

  
