import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Style from './style';

function Header(props) {
	const { data } = props;

	if(data) {
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
