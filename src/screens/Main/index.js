import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated, ActivityIndicator } from 'react-native';
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

        this.animations = {
            headerAnimation: new Animated.Value(0),
            dataAnimation: new Animated.Value(0),
        }
    }

    componentDidMount() {
        SplashScreen.hide();
        this.initAnimation();
    }

    componentWillUpdate(nextProps) {
        if(!this.props.data && nextProps.data) {
            this.dataAnimation();
        }
    }

    initAnimation() {
        Animated.timing(this.animations.headerAnimation, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true
        }).start();
    }

    dataAnimation() {
        Animated.timing(this.animations.dataAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    render() {
        const { data, isLoading, requestError } = this.props;

        return (
            <ScrollView style={Style.scrollView}>
                <View style={Style.page}>
                    <Animated.View style={[Style.section, {
                        opacity: this.animations.headerAnimation,
                        transform: [{
                            translateY: this.animations.headerAnimation.interpolate({inputRange: [0, 1], outputRange: [-10, 0]})
                        }]
                    }]}>
                        <Header data={data} />
                        <Calendar />
                    </Animated.View>

                    { !data && isLoading &&
                        <ActivityIndicator
                            testID='loadingIndicator'
                            size="large"
                            style={Style.loading}
                            color={COLOR.TEAL_BLUE} />
                    }

                    { requestError &&
                        <View>
                            <Text style={Style.errorMessage}>{'Sorry, we had a problem :('}</Text>
                            <Text style={Style.errorMessage}>{'Please, try again.'}</Text>
                        </View>
                    }

                    { data && !requestError &&
                        <Animated.View style={{ opacity: this.animations.dataAnimation }}>
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
                        </Animated.View>
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
