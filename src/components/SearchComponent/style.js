import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    form: {
        marginTop: height / 14,
        width,
        paddingLeft: width / 14,
        paddingRight: width / 14
    },
    datesContainer: {
        marginTop: 12,
        justifyContent: 'space-between'
    },
    button: {
        width: '100%',
        marginTop: 50,
        backgroundColor: COLORS.SECONDARY,
        justifyContent: 'center'
    },
    buttonIcon: {
        marginLeft: 0
    },
    clearButton: {
        color: 'black',
        marginLeft: 0,
        paddingLeft: 0
    }
});