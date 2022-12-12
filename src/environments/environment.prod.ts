import { firebase } from '../configurations';

export const environment = {
  firebase: {
    projectId: firebase.projectId,
    appId: firebase.appId,
    storageBucket: firebase.storageBucket,
    apiKey: firebase.apiKey,
    authDomain: firebase.authDomain,
    messagingSenderId: firebase.messagingSenderId,
    measurementId: firebase.measurementId,
  },
  production: true,
  baseUrl: 'https://api.themoviedb.org/3',
  imageUrl: 'https://image.tmdb.org/t/p/w300',
  // used to query public information. hence shown
  access_token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODRmZDI4MGQwZjkzMmMzMGVmN2ZmOGFjZGZmNzU0ZCIsInN1YiI6IjYzNDFiMDZmZThkMDI4MDA3YTAwMjhkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RoIV8MuQYcfW3WyFvHWFH0RphtHOEH-Nq7P7VbGdGW0',
};
