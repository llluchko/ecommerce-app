import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDsovlGaWNbLDr4PXxR2W61JoIYlhI3S2Y',
  authDomain: 'crwn-db-2c2e9.firebaseapp.com',
  projectId: 'crwn-db-2c2e9',
  storageBucket: 'crwn-db-2c2e9.appspot.com',
  messagingSenderId: '369028796654',
  appId: '1:369028796654:web:8d1817b66132b93da1e3ff',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
