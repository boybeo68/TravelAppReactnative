import * as React from 'react';
import {Component} from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity, Alert,
    KeyboardAvoidingView, Dimensions
} from 'react-native'
import * as firebase from "firebase";
import Expo from 'expo';
import Modal from 'react-native-modalbox';

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
var screen = Dimensions.get('window');

class CreateAcout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    showCreateAccout = () => {
        this.refs.MyModal.open();
    };
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

    render() {
        return (
            <Modal ref={'MyModal'} style={{
                justifyContent: 'center',
                borderRadius: 20,
                width: screen - 80,
                height: 280,
                backgroundColor: 'rgb(32, 53, 70)'
            }}
                   postion='center' backdrop={true} onClose={() => alert('Modal close')}>
                <View style={styles.infoContainer}>
                    <TextInput style={[styles.input, {
                        backgroundColor: '#464a6b',
                        color: '#FFF',
                    }]}
                               placeholder="Enter username/email"
                               placeholderTextColor='white'
                               keyboardType='email-address'
                               returnKeyType='next'
                               autoCorrect={false}
                               underlineColorAndroid="transparent"
                               onChangeText={(email) => this.setState({email})}
                    />
                    <TextInput style={[styles.input, {
                        backgroundColor: '#464a6b',
                        color: '#FFF',
                    }]}
                               placeholder="Enter password"
                               placeholderTextColor='white'
                               secureTextEntry={true}
                               returnKeyType='go'
                               autoCorrect={false}
                               underlineColorAndroid="transparent"
                               ref={"txtPassword"}
                               onChangeText={(pass) => this.setState({pass})}
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                        this.onSingUp(this.state.email, this.state.pass)
                    }}>
                        <Text style={styles.buttonText}>Create account with email</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        };
        this.onShowCreateAccount = this.onShowCreateAccount.bind(this);
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                //console.log(user)
            }
        })
    }

    onShowCreateAccount = () => {
        this.refs.creatAccount.showCreateAccout();
    };


    async onSignFb(navigation) {
        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync('260015801320288', {
            permissions: ["email", "public_profile", "user_friends"],
        });
        if (type === 'success') {
            const credential = firebase.auth.FacebookAuthProvider.credential(token);

            firebase.auth().signInAndRetrieveDataWithCredential(credential)
                .then(function (userCredential) {
                    console.log(userCredential.additionalUserInfo);
                    //todo send location go to homeScreen
                    navigation.navigate('HomeScreen',navigation.state.params);
                });
        }
    }

    signInGoogle = async (navigation) => {
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: '344842523937-fl2jonaaide98d550u1tvvghg41h8716.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });
            if (result.type === 'success') {
                console.log(result);
                const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken);
                console.log(credential);

                firebase.auth().signInAndRetrieveDataWithCredential(credential)
                    .then(function (userCredential) {
                        console.log(userCredential);
                        navigation.navigate('HomeScreen',navigation.state.params);
                    });
            } else {
                console.log('cancel ')
            }
        } catch (e) {
            console.log('Errrrrrr')
        }
    };

    onSingIn = (email, pass, navigation) => {
        firebase.auth().signInWithEmailAndPassword(email, pass).then((user) => {
            console.log(user);
           navigation.navigate('HomeScreen',navigation.state.params);
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // ...
        });
    };

    render() {
        const {navigation} = this.props;
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
                                    this.onSingIn(this.state.email, this.state.pass, navigation)
                                }}>
                                    <Text style={styles.buttonText}>Sign in with email</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: '#DD4B39'}]}
                                                  onPress={() => {
                                                      this.signInGoogle(navigation)
                                                  }}>
                                    <Text style={[styles.buttonText, {color: 'white'}]}>Sign up with google</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: '#3B5998'}]}
                                                  onPress={() => {
                                                      this.onSignFb(navigation)
                                                  }}>
                                    <Text style={[styles.buttonText, {color: 'white'}]}>Sign in with FaceBook</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
                <Text style={{marginTop: 30, color: '#fff', textDecorationLine: 'underline'}} onPress={() => {
                    // this.onSingUp(this.state.email, this.state.pass)
                    this.onShowCreateAccount()
                }}>You do not have an account</Text>
                <CreateAcout ref={'creatAccount'}/>
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
        width: 200,
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
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    }
});
