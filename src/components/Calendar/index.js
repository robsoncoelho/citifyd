import React, { Component } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import { onSelectDate } from '../../actions/main';
import Style from './style';

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: ''
        }
    }

    customCalendarIcon() {
        return (
            <Image
                style={Style.calendarIcon}
                resizeMode={'center'}
                source={require('citifyd/src/assets/images/arrow_down.png')} />
        )
    }

    render() {
        return (
            <DatePicker
                mode={'date'}
                activeOpacity={1}
                format={'MMMM DD, YYYY'}
                style={Style.calendar}
                date={this.state.date}
                cancelBtnText={'Cancel'}
                confirmBtnText={'Confirm'}
                maxDate={moment(new Date()).format('MMMM DD, YYYY')}
                placeholder={'Select date'}
                iconComponent={this.customCalendarIcon()}
                customStyles={{
                    dateInput: Style.calendarInput,
                    dateIcon: Style.calendarIcon,
                    dateText: Style.calendarText,
                }}
                onDateChange={(date) => {this.setState({date: date})}}
            />
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    onSelectDate: value => {
        dispatch(onSelectDate(value));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);
