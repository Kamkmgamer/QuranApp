import React from "react";
import { View } from "react-native";
import Svg, { Path, Rect, Circle } from "react-native-svg";

interface MosqueIllustrationProps {
  width?: number;
  height?: number;
  color?: string;
}

const MosqueIllustration: React.FC<MosqueIllustrationProps> = ({
  width = 375,
  height = 250,
  color = "#D4AF37",
}) => {
  return (
    <View style={{ width, height, alignItems: "center", justifyContent: "center" }}>
      <Svg width={width} height={height} viewBox="0 0 375 250">
        <Circle cx="250" cy="40" r="15" fill={color} opacity="0.3" />
        <Circle cx="240" cy="35" r="8" fill={color} opacity="0.2" />
        <Path d="M 187.5 80 Q 187.5 40, 220 40 Q 252.5 40, 252.5 80 L 252.5 100 L 187.5 100 Z" fill={color} />
        <Path d="M 220 30 Q 215 25, 220 20 Q 225 25, 220 30" fill={color} />
        <Rect x="219" y="20" width="2" height="10" fill={color} />
        <Rect x="160" y="100" width="120" height="80" fill={color} />
        <Path d="M 190 180 L 190 130 Q 190 110, 220 110 Q 250 110, 250 130 L 250 180 Z" fill={color} opacity="0.6" />
        <Rect x="140" y="120" width="15" height="80" fill={color} />
        <Path d="M 147.5 120 Q 147.5 100, 160 100 Q 172.5 100, 172.5 120 L 160 120 Z" fill={color} opacity="0.8" />
        <Rect x="145" y="95" width="5" height="10" fill={color} />
        <Circle cx="147.5" cy="92" r="3" fill={color} />
        <Rect x="285" y="120" width="15" height="80" fill={color} />
        <Path d="M 292.5 120 Q 292.5 100, 305 100 Q 317.5 100, 317.5 120 L 305 120 Z" fill={color} opacity="0.8" />
        <Rect x="290" y="95" width="5" height="10" fill={color} />
        <Circle cx="292.5" cy="92" r="3" fill={color} />
        <Rect x="80" y="140" width="12" height="60" fill={color} opacity="0.7" />
        <Path d="M 86 140 Q 86 125, 95 125 Q 104 125, 104 140 L 95 140 Z" fill={color} opacity="0.6" />
        <Rect x="84" y="120" width="4" height="8" fill={color} opacity="0.7" />
        <Circle cx="86" cy="118" r="2.5" fill={color} opacity="0.7" />
        <Rect x="348" y="140" width="12" height="60" fill={color} opacity="0.7" />
        <Path d="M 354 140 Q 354 125, 363 125 Q 372 125, 372 140 L 363 140 Z" fill={color} opacity="0.6" />
        <Rect x="352" y="120" width="4" height="8" fill={color} opacity="0.7" />
        <Circle cx="354" cy="118" r="2.5" fill={color} opacity="0.7" />
        <Path d="M 320 130 Q 320 110, 340 110 Q 360 110, 360 130 L 360 140 L 320 140 Z" fill={color} opacity="0.5" />
        <Path d="M 80 130 Q 80 110, 100 110 Q 120 110, 120 130 L 120 140 L 80 140 Z" fill={color} opacity="0.5" />
        <Rect x="0" y="200" width="375" height="50" fill={color} opacity="0.2" />
        <Rect x="20" y="180" width="40" height="20" fill={color} opacity="0.3" />
        <Rect x="360" y="180" width="40" height="20" fill={color} opacity="0.3" />
      </Svg>
    </View>
  );
};

export default MosqueIllustration;
