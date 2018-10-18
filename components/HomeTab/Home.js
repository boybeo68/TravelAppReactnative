import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Platform,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import {SwipeRow, Icon, Button, Container, Content, Fab, Header, Left, Right, Body} from 'native-base'
import AddModal from '../AddModal';
import {Constants} from 'expo';
import {connect} from 'react-redux'
import {onGetCourse,onDeleteCourse,onEditCourse} from './leanApi/actions/actionCreator'
import FlatListItem from '../HomeTab/leanApi/FlatListItem'


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
 class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: 0,
            refreshing: false,
            error: false,
            active: false
        });
    }
    componentDidMount() {}

    render() {
        const {loadingReducer,errorReducer} = this.props;
        return (
            <Container style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View>
                    <View style={styles.statusBar}/>
                    {/* rest of the content */}
                </View>
                <Header translucent>
                    <Left>
                        <Icon name='ios-menu' style={{color: '#fff'}} onPress={() => {
                            this.props.navigation.openDrawer();
                        }}/>
                    </Left>
                    <Right/>
                </Header>
                {loadingReducer ? (<ActivityIndicator animating={loadingReducer} color='black' size='large'/>) : null}
                {!loadingReducer &&  (
                    <Content>
                        {errorReducer !== null && (
                            <Text style={[styles.textSmall,{color: 'black'}]}>
                                {errorReducer}
                            </Text>

                        )}
                        {errorReducer === null && (
                            <FlatList
                                ref={"flatList"}
                                data={this.props.arrayReducer}

                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={this._onRefresh}
                                    />
                                }
                                renderItem={({item, index}) => {
                                    return (
                                        <FlatListItem  popupModal={this.addModal} style={{borderBottomWidth: 0}} item={item} index={index}
                                                      parentFlatList={this}>
                                        </FlatListItem>);
                                }}
                                keyExtractor={item => item.id.toString()}
                            >

                            </FlatList>
                        )}
                    </Content>
                )}

                <AddModal ref={(addModal) => {
                    this.addModal = addModal;
                }} parentFlatList={this}>
                </AddModal>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{backgroundColor: '#5067FF'}}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="ios-cog"/>
                    <Button style={{ backgroundColor: '#34A34F' }} onPress={() => {
                        this.addModal.getWrappedInstance().showAddModal();
                    }}>
                        <Icon name="md-add" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }} onPress = {() => {
                        this.props.onGetCourse()
                    }}>
                        <Icon name="ios-paper" />
                    </Button>
                </Fab>
            </Container>
        );
    }
}

function mapStateToProp(state) {
   return {
       arrayReducer:state.arrayReducer,
       loadingReducer:state.loadingReducer,
       errorReducer:state.errorReducer
   }
}

export default connect(mapStateToProp,{onGetCourse,onDeleteCourse,onEditCourse})(Home)