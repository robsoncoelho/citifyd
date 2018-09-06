import { StyleSheet } from 'react-native';
import { STATUS_BAR_HEIGHT, COLOR, PADDING } from './common/variables'

module.exports = StyleSheet.create({
  	page: {
  		flex: 1,
  		backgroundColor: COLOR.DARK_GREY_BLUE,
    	paddingTop: STATUS_BAR_HEIGHT + PADDING.TOP,
    	paddingHorizontal: PADDING.HORIZONTAL,
    	paddingBottom: PADDING.BOTTOM,
  	},
  	revenueOffer: {
  		borderRadius: 4,
  		padding: 10,
  		backgroundColor: COLOR.WHITE,
  	}
});
