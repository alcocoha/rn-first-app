import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        position: 'absolute',
        height,
        backgroundColor: 'white',
        width,
        zIndex: 1,
        top: 0,
        color: 'white'
    }
});