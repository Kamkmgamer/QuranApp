import { Pressable, View } from "react-native";
import { useColorScheme } from "nativewind";
import { MaterialIcons } from "@expo/vector-icons";

export function Header({ onClickMenu }: { onClickMenu?: () => void }) {
  const { colorScheme } = useColorScheme();

  return (
    <View className="flex-row justify-between items-center w-full px-4 pt-2">
      <Pressable
        onPress={onClickMenu}
        className="p-2 bg-darkGreen dark:bg-darkGreen rounded-lg"
      >
        <MaterialIcons
          name="settings"
          size={24}
          color="#FFFFFF"
        />
      </Pressable>
      <Pressable
        onPress={onClickMenu}
        className="p-2"
      >
        <MaterialIcons
          name="menu"
          size={28}
          color={colorScheme === "dark" ? "#FFFFFF" : "#1A5F4F"}
        />
      </Pressable>
    </View>
  );
}
