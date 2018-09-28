import * as React from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity, Alert,
    KeyboardAvoidingView
} from 'react-native'
import * as firebase from "firebase";
import Expo from 'expo';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDmSEQQw617T8htlon4Nt6_uvbq_emPoog",
    authDomain: "travel-reactnative.firebaseapp.com",
    databaseURL: "https://travel-reactnative.firebaseio.com",
    projectId: "travel-reactnative",
    storageBucket: "travel-reactnative.appspot.com",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        };
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                //console.log(user)
            }
        })
    }

    onSingUp = (email, pass) => {
        try {
            if (pass.length < 6) {
                alert('Please enter atleast 6 characters')
            }
            firebase.auth().createUserWithEmailAndPassword(email, pass).then((user) => {
                console.log(user);
            })
        } catch (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        }
    };

    async onSignFb() {
        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync('260015801320288', {
            permissions: ["email", "public_profile", "user_friends"],
        });
        if (type === 'success') {
            const credential = firebase.auth.FacebookAuthProvider.credential(token);

            firebase.auth().signInAndRetrieveDataWithCredential(credential)
                .then(function (userCredential) {
                    console.log(userCredential.additionalUserInfo);
                });
        }
    }

    signInGoogle = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: '344842523937-fl2jonaaide98d550u1tvvghg41h8716.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });
            if (result.type === 'success') {
                console.log(result) ;
                const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken);
                console.log(credential);

                firebase.auth().signInAndRetrieveDataWithCredential(credential)
                    .then(function (userCredential) {
                        console.log(userCredential);
                    });
            } else {
                console.log('cancel ')
            }
        } catch(e) {
            console.log('Errrrrrr')
        }
    };

    onSingIn = (email, pass) => {
        firebase.auth().signInWithEmailAndPassword(email, pass).then((user) => {
            console.log(user);
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // ...
        });
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(32, 53, 70)'}}>
                <KeyboardAvoidingView behavior='padding'>
                    <StatusBar barStyle="light-content"/>
                    <View>
                        <View style={styles.infoContainer}>
                            <View>
                                <Image style={styles.logo}
                                       source={require('../images/logo.png')}>
                                </Image>
                                <Text style={styles.title}>Account Information</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                           placeholder="Enter username/email"
                                           placeholderTextColor='rgba(255,255,255,0.8)'
                                           keyboardType='email-address'
                                           returnKeyType='next'
                                           autoCorrect={false}
                                           underlineColorAndroid="transparent"
                                           onChangeText={(email) => this.setState({email})}
                                />
                                <TextInput style={styles.input}
                                           placeholder="Enter password"
                                           placeholderTextColor='rgba(255,255,255,0.8)'
                                           secureTextEntry={true}
                                           returnKeyType='go'
                                           autoCorrect={false}
                                           underlineColorAndroid="transparent"
                                           ref={"txtPassword"}
                                           onChangeText={(pass) => this.setState({pass})}
                                />
                                <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                                    this.onSingIn(this.state.email, this.state.pass)
                                }}>
                                    <Text style={styles.buttonText}>Sign in with email</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: 'red'}]}
                                                  onPress={() => {
                                                      this.signInGoogle()
                                                  }}>
                                    <Text style={[styles.buttonText, {color: 'white'}]}>Sign up with google</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: 'blue'}]}
                                                  onPress={() => {
                                                      this.onSignFb()
                                                  }}>
                                    <Text style={[styles.buttonText, {color: 'white'}]}>Sign in with FaceBook</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
                <Text style={{marginTop: 10, color: '#fff', textDecorationLine: 'underline'}} onPress={() => {
                    this.onSingUp(this.state.email, this.state.pass)
                }}>You do not have an account</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // flex: 1
    },
    logo: {
        justifyContent: 'center',
        width: 128,
        height: 56,
        marginBottom: 20
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 15,
        opacity: 0.9
    },
    infoContainer: {
        alignItems: 'center'
    },
    input: {
        width: 300,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        marginTop: 10,
        backgroundColor: '#f7c744',
        paddingHorizontal: 55,
        paddingVertical: 10,
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    }
});
