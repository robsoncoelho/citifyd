import React, { Component } from 'react';
import { View } from 'react-native';
import { AreaChart, XAxis } from 'react-native-svg-charts'
import { COLOR } from '../../config/variables';
import { connect } from 'react-redux';
import Dots from './Dots';
import Line from './Line';
import Grid from './Grid';
import Style from './style';

class Chart extends Component {
    render() {
        const { data } = this.props;
        const validatonData = Object.entries(data.validationGroups);

        const values = validatonData.map(([key, value]) => parseFloat(value));
        const index = validatonData.map(([key, value]) => key);

        return (
            <View style={Style.chart}>
                <AreaChart
                    style={Style.areaChart}
                    data={values}
                    svg={{ fill: COLOR.TEAL_BLUE_25 }}
                    contentInset={{ top: 20, bottom: 5, left: 15, right: 15 }}>
                    <Grid />
                    <Line />
                    <Dots />
                </AreaChart>

                <XAxis
                    style={Style.axisBox}
                    data={values}
                    formatLabel={value => index[value]}
                    contentInset={{ left: 15, right: 15 }}
                    svg={{ fontSize: 11, fontFamily: 'OpenSans-Regular', fill: COLOR.WHITE }} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    data: state.main.data
});

export default connect(
    mapStateToProps,
)(Chart);
