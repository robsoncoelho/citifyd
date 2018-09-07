import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { currency } from '../../utils/Currency';
import Calendar from '../../components/Calendar';
import Item from '../../components/ListItem';
import Style from './style';

import { onRequestData } from '../../actions/main';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onRequestData('')
    }

    render() {
        const { data, isLoading } = this.props;

        console.log(data)

        if(data.length === 0) return <View />;

        return (
            <ScrollView style={Style.scrollView}>
                <View style={Style.page}>
                    <View style={Style.section}>
                        <View style={Style.revenueOffer}>
                            <Text style={Style.revenueOfferName}>{data.offer.name}</Text>
                            <Text style={Style.revenueOfferDescription}>{data.offer.description}</Text>
                        </View>

                        <Calendar />
                    </View>

                    <View style={Style.section}>
                        <View style={Style.highlight}>
                            <Text style={Style.labelTitle}>Net revenue</Text>
                            <Text style={Style.netRevenueValue}>{currency(data.net)}</Text>
                        </View>

                        <Item
                            title={'Gross revenue'}
                            value={currency(data.gross)} />

                        <Item
                            title={'Credits spent'}
                            value={currency(data.spent)} />
                    </View>

                    <View style={Style.section}>
                        <Item
                            title={'Validation'}
                            value={currency(data.offer.validation)} />

                        <Item
                            title={'Item'}
                            value={data.offer.item} />

                        <Item
                            title={'Unit cost'}
                            value={currency(data.offer.unitCost)} />

                        <Item
                            title={'Limit'}
                            value={`${data.offer.limit} per consumer`} />

                        <Item
                            title={'Category'}
                            value={data.offer.category} />
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
    data: state.main.data,
    isLoading: state.main.isLoading,
});

const mapDispatchToProps = dispatch => ({
    onRequestData: value => {
        dispatch(onRequestData(value));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
