import React from "react";
import { View } from "react-native";
import Svg, { Path, G, Defs, Pattern as SvgPattern, Rect } from "react-native-svg";

interface IslamicPatternProps {
  width?: number;
  height?: number;
  primaryColor?: string;
  secondaryColor?: string;
}

const IslamicPattern: React.FC<IslamicPatternProps> = ({
  width = 375,
  height = 80,
  primaryColor = "#1A5F4F",
  secondaryColor = "#D4AF37",
}) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox="0 0 375 80">
        <Defs>
          <SvgPattern
            id="islamicPattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <Path
              d="M 20 5 L 22 15 L 32 15 L 24 21 L 27 31 L 20 25 L 13 31 L 16 21 L 8 15 L 18 15 Z"
              fill={secondaryColor}
              opacity="0.3"
            />
            <Path
              d="M 0 0 L 40 40 M 40 0 L 0 40"
              stroke={secondaryColor}
              strokeWidth="0.5"
              opacity="0.2"
            />
            <circle cx="20" cy="20" r="2" fill={secondaryColor} opacity="0.4" />
          </SvgPattern>
        </Defs>
        <Rect x="0" y="0" width={width} height={height} fill={primaryColor} />
        <Rect x="0" y="0" width={width} height={height} fill="url(#islamicPattern)" />
        <Rect x="0" y="0" width={width} height={height} fill={primaryColor} opacity="0.3" />
      </Svg>
    </View>
  );
};

export { IslamicPattern };
export default IslamicPattern;
