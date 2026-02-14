import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC7DKterLI5vF0zw3ZxztHpkZEjauGN14",
  authDomain: "hotelbookingsystem-9d12a.firebaseapp.com",
  projectId: "hotelbookingsystem-9d12a",
  storageBucket: "hotelbookingsystem-9d12a.appspot.com",
  messagingSenderId: "43748545316",
  appId: "1:43748545316:web:81e6983b81652c0e7519b1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//  Force profile & email
googleProvider.addScope("profile");
googleProvider.addScope("email");
