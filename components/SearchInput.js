import React, {Component} from 'react';

import {KeyboardAvoidingView, Text, TextInput, View, StyleSheet} from 'react-native';

// import styles from './styles';
import PropTypes from 'prop-types';
export default class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleChangeText = (newText) => {
        this.setState({text: newText});
    };
    handeSubmit = () => {
        const {onSubmitText} = this.props;
        const {text} = this.state;
        if (!text) return;
        onSubmitText(text);// todo tạo 1 prop là onSubmit
        this.setState({text: ''});
    };

    render() {


        const {placeholder} = this.props; // todo cách viết khác props . <=> this.props.placeholder
        const {text} = this.state; //todo cách viết khác props . <=> this.state.text
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                           placeholder={placeholder}
                           value={text}
                           placeholderTextColor='white'
                           clearButtonMode='always'
                           underlineColorAndroid='transparent'
                           onChangeText={this.handleChangeText}
                           onSubmitEditing={this.handeSubmit}
                />
            </View>
        );
    }
}
// //todo validate dữ liệu cho props
SearchInput.propTypes = {
    onSubmitText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
SearchInput.defaultProps = {
    placeholder: 'Đây là dữ liệu mặc định của prop ',
};
const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 40,
        backgroundColor: '#666',
        borderRadius: 5,
        marginTop: 20,
    },
    textInput: {
        color: 'white',
        padding: 10,
    }
});