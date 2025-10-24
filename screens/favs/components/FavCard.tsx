import Fav from "@/utils/Favs";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import {
  Animated,
  Dimensions,
  PanResponder,
  Pressable,
  Text,
  View,
} from "react-native";
import { FavType } from "@/types";
import { useState } from "react";

export function FavCard({
  item,
  onDelete,
}: {
  item: FavType;
  onDelete: () => void;
}) {
  const { colorScheme } = useColorScheme();
  const [position] = useState(new Animated.ValueXY());
  const windowWidth = Dimensions.get("window").width;

  const panResponder = (id: number) => {
    let dx = 0;

    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        dx = gestureState.dx;
        if (dx > 40) position.setValue({ x: gestureState.moveX / 3, y: 0 });
      },
      onPanResponderRelease: () => {
        if (dx > (windowWidth * 50) / 100) {
         onDelete();
        } else {
          position.setValue({ x: 0, y: 0 });
        }
      },
    });
  };
  return (
    <Animated.View
      {...panResponder(item.id).panHandlers}
      className="bg-white dark:bg-darkGreen/30 rounded-2xl px-5 pb-3 pt-4 relative border border-darkGreen/20"
      style={{ transform: [...position.getTranslateTransform()] }}
    >
      <View className="flex-row items-center justify-start mb-2">
        <MaterialIcons
          name="bookmark"
          size={20}
          color={colorScheme === "dark" ? "#FFFFFF" : "#1A5F4F"}
        />
      </View>
      <Text className="text-base min-[600px]:text-lg py-2 text-darkGreen dark:text-textLight !font-UthmanicHafs leading-8">
        {item.text}
      </Text>
      <View className="justify-between flex-row items-center mt-2">
        <View>
          <Text className="text-darkGreen dark:text-textLight font-HelveticaBold text-sm">
            سورة {item.sora_name}
          </Text>
          <Text className="text-textGray dark:text-textLight/70 font-HelveticaLight text-xs mt-1">
            الآية {item.number}
          </Text>
        </View>
        {item.jozz && (
          <Text className="text-textGray dark:text-textLight/50 absolute left-0 top-0 text-xs">
            الجزء {item.jozz}
          </Text>
        )}
        <Pressable
          onPress={() => {
            if (item) Fav.goToFav({ ...item });
          }}
          className="flex-row items-center py-2 px-3 bg-darkGreen dark:bg-darkGreen rounded-lg"
        >
          <MaterialIcons
            name="arrow-back"
            size={18}
            color="#FFFFFF"
            style={{ marginLeft: 4 }}
          />
          <Text className="text-textLight font-HelveticaBold text-sm">
            متابعة
          </Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}
