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
      className={`flex-1 m-2 p-4 rounded-2xl border border-darkGreen/20 ${
        isGolden
          ? 'bg-golden dark:bg-golden shadow-lg'
          : 'bg-white dark:bg-darkGreen/30'
      }`}
    >
      <View className="flex-row items-center mb-2">
        <View className={`w-10 h-10 rounded-lg items-center justify-center ml-3 ${
          isGolden ? 'bg-white/20' : 'bg-golden/20'
        }`}>
          <Text className={`font-HelveticaBold text-base ${
            isGolden ? 'text-white' : 'text-darkGreen'
          }`}>
            {sura.number}
          </Text>
        </View>
      </View>
      <View className="flex-1">
        <Text className={`font-HelveticaBold text-lg mb-1 ${
          isGolden ? 'text-white' : 'text-darkGreen dark:text-textLight'
        }`}>
          {sura.name_ar.split("سورة")[1]}
        </Text>
        <Text className={`text-xs font-HelveticaLight ${
          isGolden ? 'text-white/70' : 'text-textGray dark:text-textLight/70'
        }`}>
          7 آيات
        </Text>
      </View>
      <View className="items-end mt-2">
        <Text className={`font-HelveticaRoman text-2xl ${
          isGolden ? 'text-white' : 'text-darkGreen dark:text-textLight'
        }`}>
          {sura.name_ar.split("سورة")[1]}
        </Text>
        <Text className={`text-xs ${
          isGolden ? 'text-white/70' : 'text-textGray dark:text-textLight/70'
        }`}>
          {{ Meccan: "مكية", Medinan: "مدنية" }[sura.type]}
        </Text>
      </View>
    </Pressable>
  );
};

export default memo(SurahCard);