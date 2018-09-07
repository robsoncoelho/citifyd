import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Style from './style';

function ListItem(props) {
    return (
        <View style={Style.revenueItem}>
            <Text style={Style.labelTitle}>{props.title}</Text>
            <Text style={Style.labelValue}>{props.value}</Text>
        </View>
    );
}

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default ListItem;
