/** @type {ServiceWorkerGlobalScope} */
let self;

function initInSw() {
  // [START messaging_init_in_sw]
  // Give the service worker access to Firebase Messaging.
  // Note that you can only use Firebase Messaging here. Other Firebase libraries
  // are not available in the service worker.
  importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

  // Initialize the Firebase app in the service worker by passing in
  // your app's Firebase config object.
  // https://firebase.google.com/docs/web/setup#config-object
  firebase.initializeApp({
    apiKey: "AIzaSyCFQgaaoiIhyF79VuhELPk0eNHgxCXdxvk",
    authDomain: "el-comercio-3b9c2.firebaseapp.com",
    projectId: "el-comercio-3b9c2",
    storageBucket: "el-comercio-3b9c2.appspot.com",
    messagingSenderId: "780425726339",
    appId: "1:780425726339:web:1df84ba52c3b4dacdf4eb6",
    measurementId: "G-DVNEKRV6N5"
  });

  // Retrieve an instance of Firebase Messaging so that it can handle background
  // messages.
  const messaging = firebase.messaging();
  // [END messaging_init_in_sw]
}

function onBackgroundMessage() {
  const messaging = firebase.messaging();

  // [START messaging_on_background_message]
  messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  // [END messaging_on_background_message]
}