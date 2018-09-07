import { StyleSheet } from 'react-native';
import { COLOR } from '../../config/variables';

module.exports = StyleSheet.create({
    revenueOffer: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: COLOR.WHITE,
    },
    revenueOfferName: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 14,
        color: COLOR.DARK_GREY_BLUE
    },
    revenueOfferDescription: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        lineHeight: 24,
        color: COLOR.DARK_GREY_BLUE
    },
    revenueWelcome: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    revenueWelcomeText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 14,
        color: COLOR.WHITE
    },
    revenueWelcomeInstruction: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        lineHeight: 24,
        color: COLOR.WHITE,
    },
});
