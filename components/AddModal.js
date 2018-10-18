import React, {Component} from 'react';
import {
    Text,
    Platform, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {postDataCourse, putDataCourse} from '../utils/api'
import {connect} from 'react-redux'
import {onAddCourse,onEditCourse} from './HomeTab/leanApi/actions/actionCreator'

const screen = Dimensions.get('window');
 class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFoodName: '',
            newFoodDescription: '',
            id: null
        };
    }

    showAddModal = () => {
        this.myModal.open();
    };
    EditModal = (data) => {
        this.myModal.open();
        this.setState({newFoodName: data.name, newFoodDescription: data.decription, id: data.id})
    };

    render() {
        return (
            <Modal
                ref={(myModal) => {
                    this.myModal = myModal;
                }}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 20,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New food's information</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1,
                    }}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(text) => this.setState({newFoodName: text})}
                    placeholder="Enter new food's name"
                    value={this.state.newFoodName}
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1,
                    }}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(text) => this.setState({newFoodDescription: text})}
                    placeholder="Enter new food's description"
                    value={this.state.newFoodDescription}
                />
                <Button
                    style={{fontSize: 18, color: 'white'}}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        if (this.state.newFoodName.length === 0 || this.state.newFoodDescription.length === 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        const newFood = {
                            name: this.state.newFoodName,
                            imageUrl: "https://picsum.photos/200/300/?random",
                            decription: this.state.newFoodDescription
                        };
                            if(this.state.id) {
                                this.props.onEditCourse(this.state.id,newFood);
                                this.setState({ newFoodName: '',
                                    newFoodDescription: '',});
                                this.myModal.close();
                            }else {
                                this.props.onAddCourse(newFood);
                                this.myModal.close();
                            }
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}
export default connect(null,{onAddCourse,onEditCourse},null,{ withRef: true })(AddModal)