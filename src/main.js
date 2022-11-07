import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_WxuW_8SeOBLPw6_DGI2XsVT_8hYDFBI",
  authDomain: "vue-project-a8c82.firebaseapp.com",
  projectId: "vue-project-a8c82",
  storageBucket: "vue-project-a8c82.appspot.com",
  messagingSenderId: "1091369900814",
  appId: "1:1091369900814:web:a8e953887fb4c95421555f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')