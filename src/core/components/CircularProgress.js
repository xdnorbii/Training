import React from "react";
import { View } from "react-native";
import { Svg, Circle, Text as SVGText } from 'react-native-svg'

const CircularProgress = (props) => {
  const { size, strokeWidth, text1, text2 } = props;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - props.progressPercent;

  return (
    <View style={{margin: 10}}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle 
          stroke={props.bgColor ? props.bgColor : "#f2f2f2"}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{strokeWidth}}
        />
        
        {/* Progress Circle */}
        <Circle 
          stroke={props.pgColor ? props.pgColor : "#3b5998"}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress/100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size/2}, ${size/2})`}
          {...{strokeWidth}}
        />

        {/* Text */}
        <SVGText
          fontSize={props.textSize1 ? props.textSize1 : "16"}
          x={size / 2}
          y={size / 2 + (props.textSize ?  (props.textSize / 2) - 1 : 0)}
          textAnchor="middle"
          fill={props.textColor ? props.textColor : "#333333"}
        >
          {text1}
        </SVGText>
        <SVGText
          fontSize={props.textSize1 ? props.textSize1 : "10"}
          x={size / 2}
          y={size / 2 + (props.textSize ?  (props.textSize / 2) - 1 : 10)}
          textAnchor="middle"
          fill={props.textColor ? props.textColor : "#333333"}
        >
          {text2}
        </SVGText>
      </Svg>
    </View>
  )
}

export default CircularProgress;