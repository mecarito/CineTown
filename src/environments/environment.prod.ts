import { firebase } from "../configurations";

export const environment = {
  firebase: {
    projectId: firebase.projectId,
    appId: firebase.appId,
    storageBucket: firebase.storageBucket,
    apiKey: firebase.apiKey,
    authDomain: firebase.authDomain,
    messagingSenderId: firebase.messagingSenderId,
    measurementId: firebase.measurementId
  },
  production: true,
  baseUrl: 'http://172.105.91.235:3000/'

};
