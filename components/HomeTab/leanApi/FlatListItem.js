import React, { Component } from 'react';

import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import {Button, Icon, SwipeRow} from "native-base";
import {Constants} from "expo";
import {connect} from 'react-redux'
import {onGetCourse,onDeleteCourse,onEditCourse} from './actions/actionCreator'

// import styles from './styles';

 class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        };
    }

    render() {
        const  {popupModal,item,onDeleteCourse,onEditCourse} = this.props;
        return (
            <SwipeRow
                rightOpenValue={-75}
                body={
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: 'rgb(32, 53, 70)',
                        marginLeft: 10,
                    }}>
                        <Image
                            source={{uri:item.avata}}
                            style={{width: 100, height: 100, margin: 5}}>
                        </Image>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            height: 100
                        }}>
                            <Text style={styles.flatListItem}>{item.name}</Text>
                            <Text style={styles.flatListItem}>{item.decription}</Text>
                        </View>
                    </View>
                }
                right={
                    <View style={{height: 50, justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                        <Button style={{marginBottom: 5}} small rounded danger onPress={() => {
                          onDeleteCourse(item.id)
                        }}>
                            <Icon active name="trash"/>
                        </Button>
                        <Button small rounded primary
                                onPress={() => {
                                    popupModal.getWrappedInstance().EditModal(item);
                                }}>
                            <Icon active name="ios-build-outline"/>
                        </Button>
                    </View>
                }
            />

        );
    }
}

export default connect(null,{onGetCourse,onDeleteCourse,onEditCourse})(FlatListItem)

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    },
    textSmall: {
        fontSize: 18,
    },
    textStyle: {
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
        color: 'white'
    },
    statusBar: {
        backgroundColor: "#0067a7",
        height: Constants.statusBarHeight,
    },
});