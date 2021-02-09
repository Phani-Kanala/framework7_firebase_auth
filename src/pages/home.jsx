import React, { useState, useEffect } from 'react';
// import name from '../config/firebase'
// console.log(name);
//comment
//console.log('Hellow world nnnnnn');
console.log("Hello")

import firebase from 'firebase';
require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyAEkPJEWVKfWzgoPeSgjPvTKqiSDTn8JII",
  authDomain: "hip-heading-283511.firebaseapp.com",
  projectId: "hip-heading-283511",
  storageBucket: "hip-heading-283511.appspot.com",
  messagingSenderId: "329860562466",
  appId: "1:329860562466:web:7018dfa0207798e4df947b",
  measurementId: "G-K0X5K50J6X"

};

firebase.initializeApp(firebaseConfig);


import {
  f7,
  Page,
  View,
  App,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  ListItem,
  Row,
  Col,
  Button,
  BlockFooter
} from 'framework7-react';






const HomePage = ({f7router}) => {
  const [useremail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [loginScreenOpened, setLoginScreenOpened] = useState(false);

  const signin = () => {
    firebase.auth().signInWithEmailAndPassword(useremail,password).then((userCredential)=>{
      //var user = userCredential.user;
      var user = firebase.auth().currentUser;
      
      console.log((user.emailVerified))
      // var str = "karthik"
      // if (typeof user.emailVerifed == typeof str){
      //   console.log('hello')
      //   var num = 1;
      // }

      if(user.emailVerified){
        //var user = userCredential.user;
        console.log('user successfully logged in');
        //console.log(user.uid);
        f7router.navigate('/form/');
      }
      

    }).catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage,errorCode);
    })
    // f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
    //   f7.loginScreen.close();
    // });
  }
  const Google_sign = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    f7router.navigate('/form/');
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }
  const Facebook_signin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    //provider.addScope('user_birthday');
    //firebase.auth().languageCode = 'it';
    //  provider.setCustomParameters({
    //    'display': 'popup'
    //  });

    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
    console.log('successfully signed in facebook')
    f7router.navigate('/form/');

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    console.log('Not signed in facebook')
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });

  }



  return (
  
    <Page>
    <Page loginScreen>
      <LoginScreenTitle>Sign In Page</LoginScreenTitle>
      <List form>
        <ListInput
          label="Email"
          type="email"
          placeholder="Your email"
          value={useremail}
          onInput={(e) => {
            setEmail(e.target.value);
          }}
        />
        <ListInput
          label="Password"
          type="password"
          placeholder="Your password"
          value={password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
      </List>
      <List>
        <ListButton onClick={signin}>Sign In</ListButton>
        <BlockFooter>
          Some text about sign in information.
          <br />
          <Link href="/about/">Sign Up</Link>
          <br/>
          <button onClick={Facebook_signin} className="button">Facebook signin </button>

          <br/>
          <button onClick={Google_sign} className="button">Google signin</button>

          
        </BlockFooter>
      </List>
    </Page>
  
    </Page>
  );
};
export default HomePage;