import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR } from '../config/variables'

function ListItem(props) {
    return (
        <View style={Style.revenueItem}>
            <Text style={Style.labelTitle}>{props.title}</Text>
            <Text style={Style.labelValue}>{props.value}</Text>
        </View>
    );
}

export default ListItem;

const Style = StyleSheet.create({
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
    revenueItem: {
        height: 36,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: COLOR.WHITE_5,
        justifyContent: 'space-between',
    },
})
