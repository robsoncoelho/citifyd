import React, { Component } from 'react';
import { Circle } from 'react-native-svg'
import { COLOR } from '../../config/variables';

export default function Dots({ x, y, data }) {
    return data.map((value, index) => (
        <Circle key={index}
            cx={x(index)}
            cy={y(value)}
            r={3}
            strokeWidth='1.5'
            stroke={COLOR.TEAL_BLUE_TWO}
            fill={COLOR.DARK_GREY_BLUE} />
    ))
}
