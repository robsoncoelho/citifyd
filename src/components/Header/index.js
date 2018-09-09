import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Style from './style';

class Header extends Component {
	render() {
		const { data, isLoading } = this.props;

		if(data) {
			return (
			    <View testID='revenueOffer' style={Style.revenueOffer}>
			        <Text style={[Style.revenueOfferName, isLoading && Style.revenueOfferLoading]}>{data.offer.name}</Text>
			        <Text style={[Style.revenueOfferDescription, isLoading && Style.revenueOfferLoading]}>{data.offer.description}</Text>
			    </View>
		    );
		} else {
			return (
			    <View testID='revenueWelcome' style={Style.revenueWelcome}>
			        <Text style={Style.revenueWelcomeText}>{'Daily revenue report'.toUpperCase()}</Text>
			        <Text style={Style.revenueWelcomeInstruction}>{'Please select a date:'}</Text>
			    </View>
		    );
		}
	}
}

const mapStateToProps = state => ({
    isLoading: state.main.isLoading
});

export default connect(
    mapStateToProps,
)(Header);
