import { StyleSheet } from 'react-native';
import { COLOR } from '../../config/variables';

module.exports = StyleSheet.create({
    chart: {
        height: 200
    },
    areaChart: {
        height: '100%'
    },
    axisBox: {
        borderTopWidth: 1,
        paddingTop: 8,
        borderTopColor: COLOR.WHITE,
        marginHorizontal: 0,
        height: 30
    }
});
