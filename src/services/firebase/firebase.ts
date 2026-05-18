// Import the functions you need from the SDKs you need

import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBK7D_GzmfWWwH1Icdjf6ZkG2DDWgmgZQM',
  authDomain: 'viktorcnc-68e48.firebaseapp.com',
  projectId: 'viktorcnc-68e48',
  storageBucket: 'viktorcnc-68e48.firebasestorage.app',
  messagingSenderId: '74231499364',
  appId: '1:74231499364:web:f3d145cdfbf28d49bded71',
  measurementId: 'G-W4L27N6HX0',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
