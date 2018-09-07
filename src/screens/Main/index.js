import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Calendar from '../../components/Calendar';
import Item from '../../components/ListItem';
import Style from './style';

import { onTest } from '../../actions/main';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onTest('oi')
    }

    render() {
        return (
            <ScrollView style={Style.scrollView}>
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
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    test: state.main.test,
});

const mapDispatchToProps = dispatch => ({
    onTest: value => {
        dispatch(onTest(value));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
