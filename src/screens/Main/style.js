import { StyleSheet } from 'react-native';
import { STATUS_BAR_HEIGHT, COLOR, PADDING } from '../../config/variables';

module.exports = StyleSheet.create({
  	page: {
  		flex: 1,
    	marginTop: STATUS_BAR_HEIGHT + PADDING.TOP,
    	marginHorizontal: PADDING.HORIZONTAL,
    	marginBottom: PADDING.BOTTOM,
  	},
  	scrollView: {
  		backgroundColor: COLOR.DARK_GREY_BLUE,
  	},
  	section: {
  		paddingBottom: 30,
  		borderBottomWidth: 1,
  		borderBottomColor: COLOR.WHITE,
  	},
  	highlight: {
      height: 95,
  		marginTop: 8,
  		borderBottomWidth: 1,
  		borderBottomColor: COLOR.WHITE_5,
  	},
  	netRevenueValue: {
  		fontSize: 36,
  		color: COLOR.WHITE,
  		fontFamily: 'OpenSans-Regular',
  		paddingBottom: 20,
  	},
    labelTitle: {
        fontSize: 14,
        letterSpacing: 0.4,
        color: COLOR.WHITE,
        fontFamily: 'OpenSans-Regular',
    },
    revenueItem: {
        height: 36,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: COLOR.WHITE_5,
        justifyContent: 'space-between',
    },
  	revenueTitle: {
  		fontSize: 14,
  		letterSpacing: 0.4,
  		color: COLOR.WHITE,
  		textAlign: 'center',
  		fontFamily: 'OpenSans-SemiBold',
  	},
  	revenueKind: {
  		fontSize: 13,
  		lineHeight: 14,
  		borderRadius: 4,
  		overflow: 'hidden',
  		paddingVertical: 6,
  		paddingHorizontal: 30,
  		color: COLOR.DARK_GREY_BLUE,
  		fontFamily: 'OpenSans-SemiBold',
  		backgroundColor: COLOR.TEAL_BLUE_TWO,
  	},
    errorMessage: {
      color: COLOR.WHITE,
      textAlign: 'center',
      fontFamily: 'OpenSans-Regular',
      marginTop: 15,
      fontSize: 16,
    },
    netRevenueLoading: {
        color: COLOR.WHITE_5
    }
});
