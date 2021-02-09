import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
require('firebase/auth');

//import HomePage from './home'

// import firebase from 'firebase';
// require('firebase/auth');

// const firebaseConfig = {
//   apiKey: "AIzaSyAEkPJEWVKfWzgoPeSgjPvTKqiSDTn8JII",
//   authDomain: "hip-heading-283511.firebaseapp.com",
//   projectId: "hip-heading-283511",
//   storageBucket: "hip-heading-283511.appspot.com",
//   messagingSenderId: "329860562466",
//   appId: "1:329860562466:web:7018dfa0207798e4df947b",
//   measurementId: "G-K0X5K50J6X"

// };

// firebase.initializeApp(firebaseConfig);

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




console.log('Hellow world about');

const About = () => {
  const [useremail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [loginScreenOpened, setLoginScreenOpened] = useState(false);

  const signup = () => {
    firebase.auth().createUserWithEmailAndPassword(useremail,password).then((userCredential)=>{
      //debugger;
      
      var user = userCredential.user;
      console.log('user successfully signned in');
      //f7router.navigate('/form/');
      // http://localhost:8080/
      console.log('user.............')
      console.log(useremail);
      var actionCodeSettings = {
        url: 'http://localhost:8080/',
        // iOS: {
        //   bundleId: 'localhost'
        // },
        // android: {
        //   packageName: 'localhost',
        //   installApp: true,
        //   minimumVersion: '12'
        // },
        handleCodeInApp: false,
        // When multiple custom dynamic link domains are defined, specify which
        // one to use.
        //dynamicLinkDomain: "localhost"
  
      };
      var user = firebase.auth().currentUser;
      console.log('user  user.............')
      console.log(user.emailVerified)
      console.log(user)
      user.sendEmailVerification(actionCodeSettings).then(function() {
        console.log('email sent');
  
      }).catch(function(error) {
        console.log('email not sent');
      });
  
    

    }).catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage,errorCode);
    })
    // firebase.auth().sendSignInLinkToEmail(useremail, actionCodeSettings)
    //   .then((usercrediential) => {
    //     console.log(usercrediential);
    //     console.log('email sent');
    //     // Verification email sent.
    //   })
    //   .catch((usercrediential)=> {
    //     console.log(usercrediential);
    //     console.log('email not sent');
    //     // Error occurred. Inspect error.code.
    //   });

    // firebase.auth().createUserWithEmailAndPassword(useremail,password).then((userCredential)=>{
    //   var user = userCredential.user;
    //   console.log('user successfully signned in');
    //   //f7router.navigate('/form/');

    // }).catch((error)=>{
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorMessage,errorCode);
    // })
    // f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
    //   f7.loginScreen.close();
    // });
  }


  return (
  
    <Page>
    <Page loginScreen>
      <LoginScreenTitle>Sign Up Page</LoginScreenTitle>
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
        <ListButton onClick={signup}>Sign Up</ListButton>
        <BlockFooter>
          Some text about login information.
          <br />
          <Link href="/">Login Page</Link>
          <br/>
          
        </BlockFooter>
      </List>
    </Page>
  
    </Page>
  );
};
export default About;