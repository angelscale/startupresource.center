const admin = require('firebase-admin');

const firebaseConfig = {
  apiKey: 'AIzaSyC6O3jawP6T71_CE1SX76iMmvo-TuzE6oI',
  authDomain: 'startupresourcecenter.firebaseapp.com',
  databaseURL: 'https://startupresourcecenter-default-rtdb.firebaseio.com',
  projectId: 'startupresourcecenter',
  storageBucket: 'startupresourcecenter.appspot.com',
  messagingSenderId: '245708595165',
  appId: '1:245708595165:web:013395841af4a14c6e6034',
  measurementId: 'G-GK0BMCZDKC',
  credential: admin.credential.cert(
    JSON.parse(process.env.FB_ADMIN_CREDENTIALS)
  ),
};

admin.initializeApp(firebaseConfig);

const auth = admin.auth();
const firestore = admin.firestore();
const storage = admin.storage();
const bucket = admin.storage().bucket(firebaseConfig.storageBucket);

exports.firestore = firestore;
exports.auth = auth;
exports.storage = storage;
exports.bucket = bucket;
