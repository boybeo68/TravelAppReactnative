import React, {Component} from 'react';

import {
    View, Text, TouchableHighlight, Image, StyleSheet,
    Platform,
    KeyboardAvoidingView,
    ImageBackground,
    ActivityIndicator,
    StatusBar
} from 'react-native';
import SearchInput from '../SearchInput'
import getIImagesWeather from '../../utils/getIImagesWeather'

//todo lấy dữ liệu từ api
import {fetchLocationId} from "../../utils/api";
import {fetchWeather} from "../../utils/api";
import {fetWeatherLatLong} from "../../utils/api";
import {fetWeatherAddress} from "../../utils/api";
import HeaderComponent from '../HeaderComponent'
import {Icon} from 'native-base'
import {Constants, Location, Permissions} from "expo";

// import styles from './styles';
const backgroundColor = '#0067a7';
export default class Weather extends Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Weather';
        let drawerIcon = () => (
            <Icon name='ios-cloud'/>
        );
        return {drawerLabel, drawerIcon};
    };

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            loading: false,
            error: false,
            temperature: 0,
            weather: '',
            errorMessage: null,
        };
    }

    componentDidMount() {
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
        this.setState({loading: true}, async () => {
            try {
                let location = await Location.getCurrentPositionAsync({});
                const {weather, temp, nameLocation} = await fetWeatherLatLong(location.coords.latitude, location.coords.longitude);
                this.setState({
                    weather: weather,
                    location: nameLocation,
                    temperature: temp,
                    loading: false,
                    error: false
                }, () => console.log(this.state.weather));
            } catch (e) {
                console.log(this.state.error);
                this.setState({loading: false, error: true})
            }
        });
    };

    handleUpdateLocation = async city => {
        if (!city) return;
        this.setState({loading: true}, async () => {
            try {
                const dataWeather = await fetWeatherAddress(city);
                console.log(dataWeather);
                this.setState({
                    location:dataWeather.nameLocation,
                        weather:dataWeather.weather,
                        temperature:dataWeather.temp,
                        loading: false,
                        error: false
                })
            } catch (e) {
                console.log(this.state.error);
                this.setState({loading: false, error: true})
            }
        });

    };

    render() {
        const {location, temperature, weather, loading, error} = this.state;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <HeaderComponent {...this.props} />
                <KeyboardAvoidingView style={styles.container} behavior='padding'>

                    <StatusBar barStyle='light-content'/>
                    <ImageBackground source={getIImagesWeather(weather)}
                                     style={styles.imageContainer}
                                     imageStyle={styles.image}>
                        <View style={styles.deailContainer}>
                            <ActivityIndicator animating={loading} color='white' size='large'/>
                            {!loading && (
                                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                    {error && (
                                        <Text style={[styles.textSmall, styles.textStyle]}>
                                            Could not load weather, please try a different city.
                                        </Text>
                                    )}
                                    {!error && (
                                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={[styles.textLarge, styles.textStyle]}>{location}</Text>
                                            <Text style={[styles.textSmall, styles.textStyle]}>{weather}</Text>
                                            <Text
                                                style={[styles.textLarge, styles.textStyle]}>{`${Math.round(temperature)}°C`}</Text>
                                        </View>
                                    )}
                                    <SearchInput placeholder='Search any city '
                                                 onSubmitText={this.handleUpdateLocation}/>
                                </View>
                            )}
                        </View>
                    </ImageBackground>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1 // todo toàn màn hình
    },
    deailContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    textLarge: {
        fontSize: 44,
    },
    textSmall: {
        fontSize: 18,
    },
    textStyle: {
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
        color: 'white'
    },
});
