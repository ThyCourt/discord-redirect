// ─── FIREBASE CONFIG ───
const firebaseConfig = {
  apiKey: "AIzaSyDFlJQ98PJ238ijNjl5ChTAoC6NF9vGuRk",
  authDomain: "thycleetus.firebaseapp.com",
  projectId: "thycleetus",
  storageBucket: "thycleetus.firebasestorage.app",
  messagingSenderId: "96420765190",
  appId: "1:96420765190:web:5a3c935dd3ac8e7cc46d87"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();