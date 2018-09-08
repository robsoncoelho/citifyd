import React, { Component } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import { onRequestData } from '../../actions/main';
import Style from './style';

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: ''
        }

        this.onDateChange = this.onDateChange.bind(this);
    }

    customCalendarIcon() {
        return (
            <Image
                style={Style.calendarIcon}
                resizeMode={'center'}
                source={require('citifyd/src/assets/images/arrow_down.png')} />
        )
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.requestError) {
            this.setState({ date: '' })
        }
    }

    onDateChange(date) {
        this.setState({date: date})
        this.props.onRequestData(date);
    }

    render() {
        const { isLoading } = this.props;

        return (
            <DatePicker
                mode={'date'}
                activeOpacity={1}
                format={'MMMM DD, YYYY'}
                style={Style.calendar}
                date={this.state.date}
                disabled={isLoading}
                cancelBtnText={'Cancel'}
                confirmBtnText={'Confirm'}
                maxDate={moment().subtract(1, 'day').format('MMMM DD, YYYY')}
                placeholder={'Select date'}
                iconComponent={this.customCalendarIcon()}
                customStyles={{
                    dateInput: Style.calendarInput,
                    dateIcon: Style.calendarIcon,
                    dateText: Style.calendarText,
                }}
                onDateChange={(date) => this.onDateChange(date)}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.main.isLoading,
    requestError: state.main.requestError,
});

const mapDispatchToProps = dispatch => ({
    onRequestData: value => {
        dispatch(onRequestData(value));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);
