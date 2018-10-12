import React, {Component} from 'react';

import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {Icon, Content, Container, Header, Thumbnail, Left, Right, Button, Body, ListItem} from 'native-base'
import CardItemInsta from '../CardItem'
// import styles from './styles';
var images = [
    require('../assets/feed_images/1.jpg'),
    require('../assets/feed_images/2.jpg'),
    require('../assets/feed_images/3.png'),
    require('../assets/feed_images/4.jpg'),
    require('../assets/feed_images/5.jpg'),
    require('../assets/feed_images/6.jpg'),
    require('../assets/feed_images/7.jpg'),
    require('../assets/feed_images/8.png'),
    require('../assets/feed_images/9.jpg'),
    require('../assets/feed_images/10.jpg'),
    require('../assets/feed_images/11.jpg'),
    require('../assets/feed_images/12.jpg'),
];
var {height, width} = Dimensions.get('window');
export default class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (<Icon name='people' style={{color: tintColor}}/>)
    };

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    _renderListImage() {
        return images.map((image, index) => {
            return (
                <View key={index}
                      style={[{width: (width) / 3}, {height: (width) / 3}, {marginBottom: 2}, index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0}]}>
                    <Image style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: undefined,
                        height: undefined,
                    }}
                           source={image}>
                    </Image>

                </View>
            )
        })
    };

    clickActive = (index) => {
        this.setState({activeIndex: index})
    };
    _renderProfile = () => {
        const {activeIndex} = this.state;
        if (activeIndex === 0) {
            return <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {this._renderListImage()}
            </View>
        }
        if (activeIndex === 1) {
            return <View>
                <CardItemInsta nameAc='Ngọc Trinh'
                               imgAc='http://kenh14cdn.com/2015/img-9649-1449505019079-42-0-703-1500-crop-1449505059937.jpg'
                               textAc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque esse et hic, itaque nam neque, nobis perspiciatis quas repellat repellendu'/>
                <CardItemInsta nameAc='Hoàng thùy Linh' imgAc='https://i.ytimg.com/vi/-hkghqh-8Ss/hqdefault.jpg'
                               textAc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque esse et hic, itaque nam neque, nobis perspiciatis quas repellat repellendu'/>
                <CardItemInsta nameAc='Phạm băng băng' imgAc='https://kenh14cdn.com/2017/2-1494819711684.jpg'
                               textAc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque esse et hic, itaque nam neque, nobis perspiciatis quas repellat repellendu'/>
            </View>
        }
    };

    render() {
        const {activeIndex} = this.state;
        return (
            <Container>
                <Header transparent>
                    <Left>
                        <Icon style={{paddingLeft: 10, fontSize: 20}} name='md-person-add'/>
                    </Left>
                    <Body><Text style={{fontWeight: '400', textAlign: 'center'}}>Ngọc Trinh</Text></Body>
                    <Right>
                        <Icon style={{paddingRight: 10, fontSize: 20}} name='ios-time'/>
                    </Right>
                </Header>
                <Content>
                    <View style={{height: 1, backgroundColor: '#bf7039', marginBottom: 5}}/>
                    <View
                        style={{flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', marginVertical: 5}}>
                        <View style={{flex: 1}}>
                            <Thumbnail large
                                       source={{uri: 'http://kenh14cdn.com/2015/img-9649-1449505019079-42-0-703-1500-crop-1449505059937.jpg'}}/>
                        </View>
                        <View style={{flex: 3, flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                                <View style={{flexDirection: 'column'}}>
                                    <Text>20</Text>
                                    <Text style={{color: 'grey', fontSize: 10}}>posts</Text>
                                </View>
                                <View style={{flexDirection: 'column'}}>
                                    <Text>206</Text>
                                    <Text style={{color: 'grey', fontSize: 10}}>followers</Text>
                                </View>
                                <View style={{flexDirection: 'column'}}>
                                    <Text>167</Text>
                                    <Text style={{color: 'grey', fontSize: 10}}>following</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                                <View style={{flex: 3}}>
                                    <Button small transparent full dark bordered
                                            style={{borderRadius: 10, paddingVertical: 2, borderColor: '#cb8b2c'}}>
                                        <Text style={{textAlign: 'center'}}>
                                            Edit Profile
                                        </Text>
                                    </Button>
                                </View>
                                <View style={{flex: 1, marginHorizontal: 5,}}>
                                    <Button small bordered transparent dark
                                            style={{borderRadius: 10, borderColor: '#cb8b2c'}}>
                                        <Icon name='ios-settings-outline'/>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{paddingHorizontal: 10, fontWeight: 'bold'}}>Ngọc Trinh</Text>
                        <Text style={{paddingHorizontal: 10, color: 'grey', fontSize: 15}}>Lorem ipsum A accusamus
                            adipisci cupiditate
                            quis quos?</Text>
                        <Text style={{
                            color: '#2d8cff',
                            paddingHorizontal: 10,
                            fontSize: 15
                        }}>https://github.com/boybeo68</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        borderTopWidth: 1,
                        borderColor: '#cb8b2c',
                        marginVertical: 5
                    }}>
                        <Button transparent onPress={() => this.clickActive(0)} active={activeIndex === 0}>
                            <Icon name='ios-apps-outline'
                                  style={activeIndex === 0 ? {color: '#cb8b2c'} : {color: 'grey'}}/>
                        </Button>
                        <Button transparent onPress={() => this.clickActive(1)} active={activeIndex === 1}>
                            <Icon name='ios-list-outline'
                                  style={activeIndex === 1 ? {color: '#cb8b2c'} : {color: 'grey'}}/>
                        </Button>
                        <Button transparent onPress={() => this.clickActive(2)} active={activeIndex === 2}>
                            <Icon name='ios-bookmark-outline'
                                  style={activeIndex === 2 ? {color: '#cb8b2c'} : {color: 'grey'}}/>
                        </Button>
                        <Button transparent onPress={() => this.clickActive(3)} active={activeIndex === 3}>
                            <Icon name='ios-people-outline'
                                  style={activeIndex === 3 ? {color: '#cb8b2c'} : {color: 'grey'}}/>
                        </Button>
                    </View>
                    {this._renderProfile()}
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});