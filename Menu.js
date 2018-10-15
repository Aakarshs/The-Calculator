import React from 'react';
import PropTypes from 'prop-types';
import {
    Picker,
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { TextInput } from 'react-native-gesture-handler';
import Menu_content from './menu_content.js';
import DismissKeyboard from 'dismissKeyboard';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/54666529_180531_0330_2zd93.png';

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        height: window.height,
        backgroundColor: 'red',
    },
    avatarContainer: {
        paddingBottom: 30,
        paddingTop: 90,
        alignSelf: 'center',
    },

    avatar: {
        padding: 20,
        width: 130,
        height: 130,
        borderRadius: 65,

    },

    name: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '800',
        alignSelf: 'center',

    },
    item: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        flexWrap: 'wrap',
        alignSelf: 'center',
    },
    smallitem: {
        fontSize: 14,
        fontWeight: '200',
        color: 'white',

        alignSelf: 'center',
    },
    button: {
        backgroundColor: 'red',
        flex: 1,
        height: "100%",

    },

    logout_button: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 13,
        overflow: 'hidden'
    },

    logout_button_highlight: {
        alignSelf: 'center',
        backgroundColor: 'red',
        width: 100,
        height: 40,
        borderRadius: 100,
        overflow: 'hidden'
    },



    avatarCircle: {
        padding: 3,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'white',
        alignSelf: 'center',

    }

});


export default function Menu({ onItemSelected }) {


    return (
        // <ScrollView scrollsToTop={false} style={styles.menu} >
        <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
            <View style={{ backgroundColor: "#23262E", height:Dimensions.get('window').height }}>
                <Menu_content />

            </View>

        </TouchableWithoutFeedback>
    );
}

/*
Menu.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
};
*/