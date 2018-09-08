import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Style from './style';

class ListItem extends Component {

	render() {
		const { isLoading, title, value } = this.props;

	    return (
	        <View style={Style.revenueItem}>
	            <Text style={Style.labelTitle}>{title}</Text>
	            <Text style={[Style.labelValue, isLoading && Style.labelLoading]}>{value}</Text>
	        </View>
	    );
	}
}

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    isLoading: state.main.isLoading
});

export default connect(
    mapStateToProps,
)(ListItem);
