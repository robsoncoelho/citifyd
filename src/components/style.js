import { StyleSheet } from 'react-native';
import { STATUS_BAR_HEIGHT, COLOR, PADDING } from './common/variables';

module.exports = StyleSheet.create({
  	page: {
  		flex: 1,
  		backgroundColor: COLOR.DARK_GREY_BLUE,
    	paddingTop: STATUS_BAR_HEIGHT + PADDING.TOP,
    	paddingHorizontal: PADDING.HORIZONTAL,
    	paddingBottom: PADDING.BOTTOM,
  	},
  	section: {
  		paddingBottom: 30,
  		borderBottomWidth: 1,
  		borderBottomColor: COLOR.WHITE,
  	},
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
  	highlight: {
  		marginTop: 8,
  		borderBottomWidth: 1,
  		borderBottomColor: COLOR.WHITE_5,
  	},
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
  	netRevenueValue: {
  		fontSize: 36,
  		color: COLOR.WHITE,
  		fontFamily: 'OpenSans-Regular',
  		paddingBottom: 20,
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
  	}
});
