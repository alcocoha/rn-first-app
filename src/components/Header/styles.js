import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { COLORS } from '../../constants';

export default StyleSheet.create({
    header: {
        backgroundColor: COLORS.PRIMARY,
        marginTop: Constants.platform.android ? Constants.statusBarHeight : 0
    }
});