import React, { Component } from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { COLOR } from '../config/variables';

class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {}}
                style={Style.calendar}>
                <Text style={Style.calendarDate}>October 4, 2018</Text>
                <Image
                    style={Style.calendarIcon}
                    resizeMode={'center'}
                    source={require('citifyd/src/assets/images/arrow_down.png')} />
            </TouchableOpacity>
        );
    }
}

Calendar.propTypes = {
}

export default Calendar;

const Style = StyleSheet.create({
    calendar: {
        marginTop: 15,
        borderRadius: 4,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.WHITE,
    },
    calendarDate: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: COLOR.DARK_GREY_BLUE,
        fontFamily: 'OpenSans-Regular',
    },
    calendarIcon: {
        width: '10%',
        height: '100%',
        backgroundColor: COLOR.GREY,
    }
})
