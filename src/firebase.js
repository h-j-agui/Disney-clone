import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  // authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  // projectId: "disneyplus-clone-a33d5",
  // storageBucket: "disneyplus-clone-a33d5.appspot.com",
  // messagingSenderId: "37918794208",
  // appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  // measurementId: "G-DRVLJKWRWG",

  // apiKey: "AIzaSyBgnU7VY0cy98eC5hHwSLTKqk8IPvLxysA",
  // authDomain: "disney-clone-b3f5d.firebaseapp.com",
  // projectId: "disney-clone-b3f5d",
  // storageBucket: "disney-clone-b3f5d.appspot.com",
  // messagingSenderId: "74206181578",
  // appId: "1:74206181578:web:b3a70745f35d0e6debdc33",
  // measurementId: "G-J47YFEZBRC",

  // apiKey: "AIzaSyDBdWO9zKaQ2UjLW6XVmy69I9pP1rPJS-Y",
  // authDomain: "disney-plus-clone-23ce8.firebaseapp.com",
  // projectId: "disney-plus-clone-23ce8",
  // storageBucket: "disney-plus-clone-23ce8.appspot.com",
  // messagingSenderId: "715618917639",
  // appId: "1:715618917639:web:032fb49095310b53cbf9a2",
  // measurementId: "G-55TMYQ3TKT",

  apiKey: "AIzaSyB_WpNnGZ_41dNG38O-FyDvj6_xI3qxXGQ",
  authDomain: "disney-plus-297a1.firebaseapp.com",
  projectId: "disney-plus-297a1",
  storageBucket: "disney-plus-297a1.appspot.com",
  messagingSenderId: "373460037369",
  appId: "1:373460037369:web:b73941a0f792f3233dfc28",
  measurementId: "G-VR1G8F91J0",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
