import { memo } from "react";
import { Text, Pressable, View } from "react-native";

const SurahCard = ({
  sura,
  onPress,
  isGolden,
}: {
  sura: { number: number; name_ar: string; type: string };
  onPress?: () => void;
  isGolden?: boolean;
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 mx-1 my-1 p-3 rounded-xl border ${
        isGolden
          ? 'bg-golden border-golden/30'
          : 'bg-white dark:bg-darkGreen/30 border-golden/20'
      }`}
      style={{ height: 90 }}
    >
      <View className="flex-row items-center justify-between mb-1">
        <View className={`w-6 h-6 rounded-md items-center justify-center ${
          isGolden ? 'bg-white/20' : 'bg-golden/20'
        }`}>
          <Text className={`font-HelveticaBold text-xs ${
            isGolden ? 'text-white' : 'text-darkGreen'
          }`}>
            {sura.number}
          </Text>
        </View>
        <Text className={`text-xs font-HelveticaLight ${
          isGolden ? 'text-white/70' : 'text-textGray dark:text-textLight/70'
        }`}>
          {{ Meccan: "مكية", Medinan: "مدنية" }[sura.type]}
        </Text>
      </View>
      
      <View className="flex-1 justify-center">
        <Text className={`font-HelveticaBold text-base mb-1 text-center ${
          isGolden ? 'text-white' : 'text-darkGreen dark:text-textLight'
        }`}>
          {sura.name_ar.split("سورة")[1]}
        </Text>
        <Text className={`text-xs font-HelveticaLight text-center ${
          isGolden ? 'text-white/70' : 'text-textGray dark:text-textLight/70'
        }`}>
          7 آيات
        </Text>
      </View>
    </Pressable>
  );
};

export default memo(SurahCard);