import React, {Component} from 'react';

import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {Icon, Container, Content, CardItem, Card, Thumbnail, Body, Left, Right, Button} from 'native-base'

// import styles from './styles';

const heightcard= Dimensions.get('window').height*0.6;
export default class CardItemInsta extends Component {
    render() {
        const {nameAc,imgAc,textAc} = this.props;
        return (
            <View style={styles.container}>
                <Container>
                    <Content >
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail
                                        source={{uri:imgAc}}/>
                                    <Body>
                                    <Text style={{fontWeight: 'bold'}}>
                                        {nameAc}
                                    </Text>
                                    <Text note style={{color:'gray'}} >Jan 15, 2018</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody >
                                <Image style={{height:200, width: null, flex: 1}} source={{uri: imgAc}}/>
                            </CardItem>
                            <CardItem style={{height:10}}>
                                <Left>
                                    <Button transparent={true}>
                                        <Icon name='ios-heart-outline'/>
                                    </Button>
                                    <Button transparent>
                                        <Icon name='ios-chatbubbles-outline'/>
                                    </Button>
                                    <Button transparent>
                                        <Icon name='ios-send-outline'/>
                                    </Button>
                                </Left>
                            </CardItem>
                            <CardItem style={{height:10}}>
                                <Left>
                                    <Text  style={{ color: '#ff4c3f'}}>101</Text>
                                    <Icon name='md-thumbs-up' style={{fontSize:20, color: '#ff4c3f', marginLeft:5}}/>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text>
                                    <Text style={{fontWeight:'bold'}}>{nameAc} </Text>
                                    {textAc}
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        height:450
    }
});