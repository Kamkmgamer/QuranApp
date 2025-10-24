import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export function ContinueReadingButton({ onClick }: { onClick?: () => void }) {
  const { colorScheme } = useColorScheme();

  return (
    <Pressable
      className="flex-row items-center justify-between absolute left-3 top-5"
      onPress={() => {
        if (onClick) onClick();
      }}
    >
      <View className="flex-row items-center">
        <MaterialIcons
          name="bookmark"
          size={20}
          color="#D4AF37"
          style={{ marginLeft: 8 }}
        />
        <Text className="font-HelveticaRoman text-golden dark:text-golden text-sm">
          متابعة
        </Text>
      </View>
    </Pressable>
  );
}
