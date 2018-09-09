import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import { currency } from '../../utils/currency';
import Header from '../../components/Header/';
import Calendar from '../../components/Calendar/';
import Item from '../../components/ListItem/';
import Chart from '../../components/Chart/';
import Style from './style';

import { COLOR } from '../../config/variables';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        const { data, isLoading, requestError } = this.props;

        return (
            <ScrollView style={Style.scrollView}>
                <View style={Style.page}>
                    <View style={Style.section}>
                        <Header data={data} />
                        <Calendar />
                    </View>

                    { !data && isLoading &&
                        <ActivityIndicator style={Style.loading} size="large" color={COLOR.TEAL_BLUE} />
                    }

                    { requestError &&
                        <View>
                            <Text style={Style.errorMessage}>{'Sorry, we had a problem :('}</Text>
                            <Text style={Style.errorMessage}>{'Please, try again.'}</Text>
                        </View>
                    }

                    { data && !requestError &&
                        <View>
                            <View style={Style.section}>
                                <View style={Style.highlight}>
                                    <Text style={Style.labelTitle}>{'Net revenue'}</Text>
                                    <Text style={[Style.netRevenueValue, isLoading && Style.netRevenueLoading]}>
                                        {currency(data.net)}
                                    </Text>
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
                                <Text style={Style.revenueTitle}>{'Revenue'}</Text>
                                <Text style={Style.revenueKind}>{'Net'}</Text>
                            </View>

                            <Chart />
                        </View>
                    }
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    data: state.main.data,
    isLoading: state.main.isLoading,
    requestError: state.main.requestError,
});

export default connect(
    mapStateToProps,
)(Main);
