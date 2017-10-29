// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#9ec3ff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        paddingTop: 15,
        paddingBottom: 15,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
// Make the component available to other parts of the app
export default Header;
