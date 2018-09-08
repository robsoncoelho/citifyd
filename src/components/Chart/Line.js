import React, { Component } from 'react';
import { Path } from 'react-native-svg'
import { COLOR } from '../../config/variables';

export default function Line({ line }) {
    return (
		<Path
            d={line}
            strokeWidth='1.5'
            stroke={COLOR.TEAL_BLUE_TWO}
            fill={'none'} />
	)
}
