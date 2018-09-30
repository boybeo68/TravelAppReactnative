import * as React from 'react';
import {Text, View, StyleSheet, Image, Platform} from 'react-native';
import {Constants, Location, Permissions} from 'expo';
import {fetWeatherLatLong} from '../utils/api'

export default class SlashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            errorMessage: null,
        };
    }

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }
        let location = await Location.getCurrentPositionAsync({});
        console.log(JSON.stringify(location));
        let dataLocation = {
            lat: location.coords.latitude,
            lon: location.coords.longitude
        };
        this.props.navigation.navigate('LoginScreen', dataLocation);
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo}
                       source={require('../images/logo.png')}>
                </Image>
            </View>
        );
        // let text = 'Waiting..';
        // if (this.state.errorMessage) {
        //     text = this.state.errorMessage;
        // } else if (this.state.location) {
        //     text = JSON.stringify(this.state.location);
        //     console.log(text)
        // }
        //
        // return (
        //     <View style={styles.container}>
        //         <Text style={styles.paragraph}>{text}</Text>
        //     </View>
        // );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(32, 53, 70)',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
});
