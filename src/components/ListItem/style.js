import { StyleSheet } from 'react-native';
import { COLOR } from '../../config/variables';

module.exports = StyleSheet.create({
    labelTitle: {
        fontSize: 14,
        letterSpacing: 0.4,
        color: COLOR.WHITE,
        fontFamily: 'OpenSans-Regular',
    },
    labelValue: {
        fontSize: 14,
        letterSpacing: 0.4,
        color: COLOR.WHITE,
        fontFamily: 'OpenSans-SemiBold',
    },
    revenueItem: {
        height: 36,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: COLOR.WHITE_5,
        justifyContent: 'space-between',
    },
    labelLoading: {
        color: COLOR.WHITE_5
    }
});
