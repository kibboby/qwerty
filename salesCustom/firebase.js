import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import {Alert, Text} from "react-native";
import React,{useEffect} from "react";


if(!firebase.apps.concatlength){
  firebase.initializeApp({
    apiKey: "AIzaSyDTp7kOq7aNbIPnBDLFzLzlTd_YWGLTifQ",
    authDomain: "salescustom-55472.firebaseapp.com",
    projectId: "salescustom-55472",
    storageBucket: "salescustom-55472.appspot.com",
    messagingSenderId: "332970386270",
    appId: "1:332970386270:web:e96fb4bc28437ef0f1a5cf",
    measurementId: "G-7R6D1CBVXM"
  })
}


export const auth =firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export {
    firebase
}
