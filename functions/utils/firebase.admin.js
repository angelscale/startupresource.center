const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getFirestore } = require('firebase-admin/firestore');
const { getStorage } = require('firebase-admin/storage');

const firebaseAdminCredentials = JSON.parse(process.env.FB_ADMIN_CREDENTIALS);

const firebaseConfig = {
  apiKey: 'AIzaSyC6O3jawP6T71_CE1SX76iMmvo-TuzE6oI',
  authDomain: 'startupresourcecenter.firebaseapp.com',
  databaseURL: 'https://startupresourcecenter-default-rtdb.firebaseio.com',
  projectId: 'startupresourcecenter',
  storageBucket: 'startupresourcecenter.appspot.com',
  messagingSenderId: '245708595165',
  appId: '1:245708595165:web:28b476cc67ce4aa26e6034',
  measurementId: 'G-PJ0S60P5TT',
  credential: cert(firebaseAdminCredentials),
};

const firebaseAdmin = initializeApp(firebaseConfig);

const auth = getAuth(firebaseAdmin);
const firestore = getFirestore(firebaseAdmin);
const storage = getStorage(firebaseAdmin);
const bucket = storage.bucket();

exports.firestore = firestore;
exports.auth = auth;
exports.storage = storage;
exports.bucket = bucket;
