import React from 'react';
import * as firebase from 'firebase';
import {StyleSheet,Text,View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from '.companents/login'
import Home from '.companents/home'
import Detail from '.companents/detail'

const firebaseConfig = {
    apiKey: "AIzaSyDGjDmLFjr32sJE3fIQgS8UPQS8j6srdcg",
    authDomain: "haber-app-f4714.firebaseapp.com",
    projectId: "haber-app-f4714",
    storageBucket: "haber-app-f4714.appspot.com",
    messagingSenderId: "474157930951",
    appId: "1:474157930951:web:cc292427d5221d3aa021e2",
    measurementId: "G-01S1PTWVVN"
  };
firebase.initializeApp(config);

const RouteConfigs = { 
    Login:{screen:Login},
    Home:{screen:Home},
    Detail:{screen:Detail}
}

const StackNavigatorConfig={
    headerMode:'none'
}

export default StackNavigator(RouteConfigs,StackNavigatorConfig);
