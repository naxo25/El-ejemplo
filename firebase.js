
const firebaseConfig = {
	apiKey: "AIzaSyCFQgaaoiIhyF79VuhELPk0eNHgxCXdxvk",
	authDomain: "el-comercio-3b9c2.firebaseapp.com",
	projectId: "el-comercio-3b9c2",
	storageBucket: "el-comercio-3b9c2.appspot.com",
	messagingSenderId: "780425726339",
	appId: "1:780425726339:web:1df84ba52c3b4dacdf4eb6",
	measurementId: "G-DVNEKRV6N5"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storageRef = firebase.storage().ref();
const firebaseAuth = firebase.auth()
// const firebaseMessaging = firebase.messaging()
const analytics = firebase.analytics();