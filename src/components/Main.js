import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Calendar from './common/calendar';
import Item from './common/listItem';
import Style from './style';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Style.page}>
                <View style={Style.section}>
                    <View style={Style.revenueOffer}>
                        <Text style={Style.revenueOfferName}>$0.50 validation</Text>
                        <Text style={Style.revenueOfferDescription}>16 oz. coffee purchase ($2.50)</Text>
                    </View>

                    <Calendar />
                </View>

                <View style={Style.section}>
                    <View style={Style.highlight}>
                        <Text style={Style.labelTitle}>Net revenue</Text>
                        <Text style={Style.netRevenueValue}>$1,189.50</Text>
                    </View>
                    <View style={[Style.revenueItem, Style.revenueItemBorder]}>
                        <Text style={Style.labelTitle}>Gross revenue</Text>
                        <Text style={Style.labelValue}>$1,525.00</Text>
                    </View>

                    <View style={Style.revenueItem}>
                        <Text style={Style.labelTitle}>Credits spent</Text>
                        <Text style={Style.labelValue}>$335.50</Text>
                    </View>
                </View>

                <View style={Style.section}>
                    <View style={Style.revenueItem}>
                        <Text style={Style.labelTitle}>Validation</Text>
                        <Text style={Style.labelValue}>$0.50</Text>
                    </View>
                    <View style={Style.revenueItem}>
                        <Text style={Style.labelTitle}>Item</Text>
                        <Text style={Style.labelValue}>16 oz. coffee</Text>
                    </View>
                    <View style={Style.revenueItem}>
                        <Text style={Style.labelTitle}>Unit cost</Text>
                        <Text style={Style.labelValue}>$2.50</Text>
                    </View>
                    <View style={Style.revenueItem}>
                        <Text style={Style.labelTitle}>Limit</Text>
                        <Text style={Style.labelValue}>2 per consumer</Text>
                    </View>
                    <View style={Style.revenueItem}>
                        <Text style={Style.labelTitle}>Category</Text>
                        <Text style={Style.labelValue}>Food & Drink</Text>
                    </View>
                </View>

                <View style={Style.revenueItem}>
                    <Text style={Style.revenueTitle}>Revenue</Text>
                    <Text style={Style.revenueKind}>Net</Text>
                </View>

            </View>
        );
    }
}

export default Main;
