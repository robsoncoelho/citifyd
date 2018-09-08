import React, { Component } from 'react';
import { Rect } from 'react-native-svg'
import { COLOR } from '../../config/variables';

export default function Grid({ x, y, data }) {
    const rectHeight = (100 / data.length).toFixed(2)

    return data.map((value, index) => {
        return (
            <Rect
                x={0}
                y={`${100 - (rectHeight * (index))}%`}
                width="100%"
                height={`${rectHeight}%`}
                key={index}
                fill={index % 2 ? COLOR.WHITE_5 : 'transparent'}
            />
        )
    })
}
