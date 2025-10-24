import { Pressable, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const { colorScheme } = useColorScheme();

  return (
    <View className="relative h-12 mt-4">
      <MaterialIcons
        name="search"
        size={24}
        color={colorScheme === "dark" ? "#FFFFFF" : "#8B8B8B"}
        style={{ position: 'absolute', top: 12, left: 12, zIndex: 10 }}
      />
      {value.trim() && value.length > 0 && (
        <Pressable
          onPress={() => onChange("")}
          style={{ position: 'absolute', top: 0, right: 0, zIndex: 20, width: 40, height: 48, justifyContent: 'center', alignItems: 'center' }}
        >
          <MaterialIcons
            name="close"
            size={20}
            color={colorScheme === "dark" ? "#FFFFFF" : "#8B8B8B"}
          />
        </Pressable>
      )}
      <TextInput
        selectionColor={colorScheme === "dark" ? "#FFFFFF" : "#1A5F4F"}
        placeholder="بحث السور"
        blurOnSubmit
        placeholderTextColor={
          colorScheme === "dark" ? "#FFFFFF66" : "#8B8B8B"
        }
        value={value}
        className="w-full h-full text-right pr-4 pl-10 font-HelveticaRoman text-darkGreen dark:text-textLight bg-white dark:bg-darkGreen/30 border border-darkGreen/20 dark:border-darkGreen rounded-xl"
        onChangeText={(text) => {
          onChange(text);
        }}
      />
    </View>
  );
}
