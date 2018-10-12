import React, {Component} from 'react';

import {View, Text, StyleSheet, Image, FlatList, ScrollView, StatusBar} from 'react-native';
import {Icon, Container, List, ListItem, Content, Thumbnail, Header, Left, Right, Body, Button} from 'native-base'
import CardItemInsta from '../CardItem'

// import styles from './styles';
const cards = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque esse et hic, itaque nam neque, nobis perspiciatis quas repellat repellendu',
        name: 'Ngọc Trinh',
        image: 'http://kenh14cdn.com/2015/img-9649-1449505019079-42-0-703-1500-crop-1449505059937.jpg',
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque esse et hic, itaque nam neque, nobis perspiciatis quas repellat repellendus rerum vitae. Accusamus aliquid exercitationem, nesciunt non sapiente ut voluptatem!',
        name: 'ngọc Trinh',
        image: 'https://i.ytimg.com/vi/-hkghqh-8Ss/hqdefault.jpg',
    },
    {
        text: 'sexy',
        name: 'anh Lâm',
        image: 'https://kenh14cdn.com/2017/2-1494819711684.jpg',
    },
    {
        text: 'cuốn hút',
        name: 'Nguyễn Hạnh',
        image: 'https://kenh14cdn.com/2017/1-1503387330338.jpg',
    },
    {
        text: 'Anh lâm nhìn là mê',
        name: 'Anh Quang',
        image: 'http://media.doisongphapluat.com/277/2014/4/28/ngoc-trinh2.jpg',
    },
];
export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (<Icon name='ios-home' style={{color: tintColor}}/>)
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='dark-content'
                />
                <Container>
                    <Header transparent>
                        <Left>
                            <Icon style={{paddingLeft: 10}} name='ios-camera-outline'/>
                        </Left>
                        <Body><Text>Instagram</Text></Body>
                        <Right>
                            <Icon style={{paddingRight: 10}} name='ios-send-outline'/>
                        </Right>
                    </Header>
                    <View style={{height:1, backgroundColor:'#bf7039'}} />
                    <View style={{height: 100}}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{marginHorizontal: 10, fontWeight: '500'}}>Stories</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Icon style={{fontSize: 15}} name='ios-play'/>
                                <Text style={{marginHorizontal: 10, fontWeight: '500'}}>Watch All</Text>
                            </View>

                        </View>
                        <View style={{flex: 2, flexDirection: 'row'}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{alignItems: 'center', paddingStart: 5, paddingEnd: 5}}>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={{uri: 'http://kenh14cdn.com/2015/img-9649-1449505019079-42-0-703-1500-crop-1449505059937.jpg'}}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={{uri: 'https://i.ytimg.com/vi/-hkghqh-8Ss/hqdefault.jpg'}}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={{uri: 'https://kenh14cdn.com/2017/1-1503387330338.jpg'}}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={{uri: 'http://media.doisongphapluat.com/277/2014/4/28/ngoc-trinh2.jpg'}}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={{uri: 'http://kenh14cdn.com/2015/img-9649-1449505019079-42-0-703-1500-crop-1449505059937.jpg'}}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={{uri: 'https://i.ytimg.com/vi/-hkghqh-8Ss/hqdefault.jpg'}}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={{uri: 'https://kenh14cdn.com/2017/1-1503387330338.jpg'}}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={{uri: 'http://media.doisongphapluat.com/277/2014/4/28/ngoc-trinh2.jpg'}}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={{uri: 'http://kenh14cdn.com/2015/img-9649-1449505019079-42-0-703-1500-crop-1449505059937.jpg'}}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={{uri: 'https://i.ytimg.com/vi/-hkghqh-8Ss/hqdefault.jpg'}}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={{uri: 'https://kenh14cdn.com/2017/1-1503387330338.jpg'}}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={{uri: 'http://media.doisongphapluat.com/277/2014/4/28/ngoc-trinh2.jpg'}}/>
                            </ScrollView>

                        </View>
                    </View>

                    <List style={{marginTop: 10}} noIndent='false' dataArray={cards} renderRow={(item) =>
                        <ListItem>
                            <CardItemInsta nameAc={item.name} imgAc={item.image} textAc={item.text}/>
                        </ListItem>
                    }>
                    </List>
                </Container>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
    }
});