import React, {Component} from 'react';
import {Icon} from 'native-base'
import {View, Text, TouchableOpacity, Image} from 'react-native';
import HeaderComponent from '../HeaderComponent'
import { ImagePicker, Camera, Permissions  } from 'expo';

// import styles from './styles';
const backgroundColor = '#a7441f';
export default class Camera_and_Info extends Component {
    constructor(props) {
      super(props);
      this.state = {
          image:null,
          hasCameraPermission: null,
          type: Camera.Constants.Type.back,
          openCam:false
      };
    }
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Camera';
        let drawerIcon = () => (
            <Icon name='ios-camera'/>
        );
        return {drawerLabel, drawerIcon};
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            this.setState({image:photo.uri})
        }
    };

    render() {
        const { hasCameraPermission } = this.state;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <HeaderComponent {...this.props} />
                <View style={{
                    flex: 1,
                    backgroundColor: backgroundColor,
                    alignItems:'center',
                }}>
                    <TouchableOpacity style={{backgroundColor:'#fff', padding: 10, margin: 10, borderRadius:5}} onPress={()=>{this.setState({openCam:true})}}>
                        <Text>
                            Capture
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#fff', padding: 10, margin: 10, borderRadius:5}} onPress={this._pickImage}>
                        <Text>
                            Open Library
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', alignItems:'center', margin: 40}}>
                    {this.state.image && <Image source={{uri: this.state.image}} style={{width:200 , height: 200}} />}

                </View>
                {this.state.openCam &&   <Camera ref={ref => { this.camera = ref; }} style={{ flex: 2 }} type={this.state.type}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        }}>
                        <TouchableOpacity
                            style={{
                                flex: 0.1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                this.setState({
                                    type: this.state.type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back,
                                });
                            }}>
                            <Text
                                style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                {' '}Flip{' '}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 0.1,
                                alignSelf: 'center',
                                alignItems: 'center',
                            }}
                            onPress={this.snap}>
                            <Text
                                style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                {' '}Capture{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Camera>}

            </View>
        );
    }
}