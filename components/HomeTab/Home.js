import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    Platform,
    ActivityIndicator,
    TouchableHighlight,
    RefreshControl
} from 'react-native';
import {SwipeRow, Icon, Button, Container, Content, Fab, Header, Left, Right, Body} from 'native-base'
import HeaderComponent from '../HeaderComponent'
import AddModal from '../AddModal';
import {fetDataCourse,postDataCourse} from '../../utils/api'
import { Constants } from 'expo';

const backgroundColor = '#0067a7';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        };
    }

    render() {
        return (
            <SwipeRow
                rightOpenValue={-75}
                body={
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            backgroundColor: 'rgb(32, 53, 70)',
                            marginLeft: 10
                        }}>
                            <Image
                                source={{uri: this.props.item.avata}}
                                style={{width: 100, height: 100, margin: 5}}
                            >

                            </Image>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                height: 100
                            }}>
                                <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                                <Text style={styles.flatListItem}>{this.props.item.decription}</Text>
                            </View>
                        </View>
                }
                right={
                    <View style={{height: 50, justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                        <Button style={{marginBottom: 5}} small rounded danger onPress={() => {
                        }}>
                            <Icon active name="trash"/>
                        </Button>
                        <Button small rounded primary
                                onPress={() => {
                                }}>
                            <Icon active name="ios-build-outline"/>
                        </Button>
                    </View>
                }
            />

        );
    }
}

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
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
            dataCourse: [],
            loading: false,
            error: false,
            active: false
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }

    refreshFlatList = () => {
        this.setState((prevState) => {
            return {
                deletedRowKey: (prevState * 3.12)
            };
        });
        this.refs.flatList.scrollToEnd();
    };

    _onPressAdd() {
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }

    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Home';
        let drawerIcon = () => (
            <Icon name='ios-home'/>
        );
        return {drawerLabel, drawerIcon};
    };

    componentDidMount() {
        this.setState({loading: true}, async () => {
            try {
                const dataCourse = await fetDataCourse();
                this.setState({
                    dataCourse: dataCourse,
                    loading: false,
                    error: false
                })
            } catch (e) {
                console.log('không lấy được dữ liệu ');
                this.setState({loading: false, error: true})
            }
        })
    }

    render() {
        const {loading, error, dataCourse} = this.state;
        return (
            <Container style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View>
                    <View style={styles.statusBar} />
                    {/* rest of the content */}
                </View>
                <Header translucent>
                    <Left>
                        <Icon name='ios-menu' style={{color:'#fff'}} onPress={()=>{
                            this.props.navigation.openDrawer();
                        }}/>
                    </Left>
                    <Right/>
                </Header>
                {loading ? ( <ActivityIndicator animating={loading} color='black' size='large'/>) : null}
                {!loading && (
                    <View>
                        {error && (
                            <Text style={[styles.textSmall, styles.textStyle]}>
                                Could not load data, please try a different city.
                            </Text>
                        )}
                        {!error && (
                            <FlatList
                                ref={"flatList"}
                                data={dataCourse}
                                renderItem={({item, index}) => {
                                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                                    return (
                                        <FlatListItem style={{borderBottomWidth: 0}} item={item} index={index} parentFlatList={this}>
                                        </FlatListItem>);
                                }}
                                keyExtractor={item => item.id.toString()}
                            >

                            </FlatList>
                        )}
                    </View>
                )}

                <AddModal ref={(addModal) => {
                    this.addModal=addModal;
                }} parentFlatList={this}>
                </AddModal>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{backgroundColor: '#5067FF'}}
                    position="bottomRight"
                    onPress={() => {
                        this.addModal.showAddModal();
                    }}>
                    <Icon name="md-add"/>
                </Fab>
            </Container>
        );
    }
}