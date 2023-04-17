import React from 'react';
import * as firebase from 'firebase';
import {StyleSheet,Text,View} from 'react-native';

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

export default class App extends React.Companent {
    render() {
        return (
            <View style={styles.container}>
                <Text> Open up App.js to start working on your app! </Text>
                </View>
        );
    }
} 
 
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'Center',

    },
});