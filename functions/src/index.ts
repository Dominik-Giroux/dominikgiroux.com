import * as functions from 'firebase-functions';

const universal = require(`${process.cwd()}/dist/server`).app;

export const ssr = functions.https.onRequest(universal);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
