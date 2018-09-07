import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR } from '../config/variables'

function Header(props) {
	const { data } = props;

	if(data.length !== 0) {
		return (
		    <View style={Style.revenueOffer}>
		        <Text style={Style.revenueOfferName}>{data.offer.name}</Text>
		        <Text style={Style.revenueOfferDescription}>{data.offer.description}</Text>
		    </View>
	    );
	} else {
		return (
		    <View style={Style.revenueWelcome}>
		        <Text style={Style.revenueWelcomeText}>{'Daily revenue report'.toUpperCase()}</Text>
		        <Text style={Style.revenueWelcomeInstruction}>{'Please select a date:'}</Text>
		    </View>
	    );
	}
}

export default Header;

const Style = StyleSheet.create({
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
})
