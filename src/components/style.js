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
  	labelTitle: {
  		fontSize: 14,
  		paddingTop: 8,
  		letterSpacing: 0.4,
  		color: COLOR.WHITE,
  		fontFamily: 'OpenSans-Regular',
  	},
  	labelValue: {
  		fontSize: 14,
  		paddingTop: 8,
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
  	revenueItemBorder: {
  		borderTopWidth: 1,
  		borderTopColor: COLOR.WHITE_5,
  	},
  	revenueItem: {
  		paddingBottom: 8,
  		flexDirection: 'row',
  		borderBottomWidth: 1,
  		borderBottomColor: COLOR.WHITE_5,
  		justifyContent: 'space-between',
  	}
});
