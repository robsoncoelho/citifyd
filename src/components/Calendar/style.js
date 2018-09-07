import { StyleSheet } from 'react-native';
import { COLOR } from '../../config/variables';

module.exports = StyleSheet.create({
    calendar: {
        width: '100%',
        marginTop: 15,
        borderWidth: 0,
        borderRadius: 4,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: COLOR.WHITE,
    },
    calendarInput: {
        alignItems: 'flex-start',
        borderWidth: 0,
        paddingHorizontal: 15,
        backgroundColor: COLOR.WHITE,
    },
    calendarText: {
        color: COLOR.DARK_GREY_BLUE,
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        lineHeight: 24,
    },
    calendarIcon: {
        width: '10%',
        height: '100%',
        backgroundColor: COLOR.GREY,
    }
});
