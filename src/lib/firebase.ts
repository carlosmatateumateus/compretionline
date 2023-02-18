import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfigEnv = {
  apiKey: import.meta.env.VITE_API_KEY.trim(),
  authDomain: import.meta.env.VITE_AUTH_DOMAIN.trim(),
  projectId: import.meta.env.VITE_PROJECT_ID.trim(),
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET.trim(),
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID.trim(),
  appId: import.meta.env.VITE_APP_ID.trim(),
  measurementId: import.meta.env.VITE_MEASUREMENT_ID.trim()
};

const firebaseConfig = firebaseConfigEnv

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const storage = getStorage(app)