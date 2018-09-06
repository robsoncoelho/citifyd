import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STATUS_BAR_HEIGHT } from './common/variables';
import Style from './style';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={Style.page}>
                <View style={Style.revenueOffer}>
                    <Text>Citifyd App</Text>
                </View>
            </View>
        );
    }
}

export default Main;
