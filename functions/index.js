const functions = require('firebase-functions');
const express = require('express');
const nodemailer = require('nodemailer');
const nodemailerTransport = require('nodemailer-mailgun-transport');
const cors = require('cors');
const app = express();

const dotenv = require('dotenv').config();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// handle CORS issue
app.use(
  cors({
    origin: [
      'https://startupresource.center',
      'https://startupresourcecenter.firebaseapp.com',
      'https://startupresourcecenter.web.app',
      'https://startupresourcecenter.*.firebaseapp.com',
      'https://startupresourcecenter.*.web.app',
      'localhost:8000',
    ],
  })
);

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN,
  },
};

const nodemailerMailgun = nodemailer.createTransport(nodemailerTransport(auth));

exports.sendMail = functions.https.onCall(async (data, context) => {
  nodemailerMailgun.sendMail(data.body, function (err, info) {
    if (err) {
      console.log(err);
      return { success: false };
    } else {
      return { success: true };
    }
  });
});
