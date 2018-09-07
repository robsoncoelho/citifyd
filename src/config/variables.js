import { Platform, Dimensions } from 'react-native';

export const COLOR = {
	DARK: '#131b1f',
	DARK_GREY_BLUE: '#354559',
	DARK_GREY_BLUE_TWO: '#354659',
	TEAL_BLUE: '#0099b7',
	TEAL_BLUE_TWO: '#0098b7',
	TEAL_BLUE_25: 'rgba(0,153,183,.25)',
	WHITE: '#FFFFFF',
	WHITE_5: 'rgba(255,255,255,.05)',
	GREY: '#c5c9c8'
}

export const PADDING = {
	TOP: 30,
	HORIZONTAL: 24,
	BOTTOM: 50,
}

export const IS_IPHONE_X = (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (Dimensions.height === 812 || Dimensions.width === 812))

export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0)
