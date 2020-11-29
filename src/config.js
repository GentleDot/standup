const firebase_config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain : process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STRG_BKT,
    messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

export const embedlyKey = process.env.REACT_APP_EMBEDLY_KEY;
export default firebase_config;