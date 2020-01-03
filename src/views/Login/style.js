import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    content: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    grid: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: 24,
        fontWeight: '400'
    },
    subtitle: {
        fontSize: 16
    },
    googleBtn: {
        marginTop: 20,
        width: width / 1.5,
        height: 60,
        justifyContent: 'center'
    },
    googleIcon: {
        width: 30,
        height: 30
    }
});