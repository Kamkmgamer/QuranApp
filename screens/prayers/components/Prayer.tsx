import { Text, View } from "react-native";

export function Prayer({ title, value }: { title: string; value: string }) {
  return (
    <View className="flex-row justify-between items-center bg-white dark:bg-darkGreen/30 p-5 rounded-2xl mt-4 border border-darkGreen/20">
      <Text className="text-xl font-HelveticaBold text-darkGreen dark:text-textLight">
        {title}
      </Text>
      <Text className="text-lg font-HelveticaRoman text-darkGreen dark:text-textLight">
        {value}
      </Text>
    </View>
  );
}
