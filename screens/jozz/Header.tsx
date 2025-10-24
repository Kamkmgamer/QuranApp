import { ActivityIndicator, Pressable, View } from "react-native";
import { Text } from "react-native";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import { MaterialIcons } from "@expo/vector-icons";
import { storage } from "@/utils";

export function Header({
  title,
  layout,
  setLayout,
  isLoading,
  isPlaying,
  stop,
}: {
  title?: string;
  setLayout?: React.Dispatch<React.SetStateAction<"ayat" | "page">>;
  layout?: "ayat" | "page";
  stop?: () => void;
  isPlaying?: boolean;
  isLoading?: boolean;
}) {
  const { colorScheme } = useColorScheme();

  return (
    <View className="flex flex-row justify-between px-4 py-4 bg-cream dark:bg-darkBg items-center">
      <Pressable
        onPress={() => {
          router.back();
        }}
        className="items-center justify-center"
      >
        <MaterialIcons
          name="arrow-forward"
          size={28}
          color={colorScheme === "dark" ? "#FFFFFF" : "#1A5F4F"}
        />
      </Pressable>
      
      <View className="flex-1 items-center">
        <Text className="font-HelveticaBold text-xl text-darkGreen dark:text-textLight">
          {title}
        </Text>
      </View>

      <View className="flex-row items-center gap-x-3">
        {stop && (
          <Pressable
            onPress={() => {
              stop();
            }}
            className="items-center justify-center"
          >
            {isPlaying && !isLoading && (
              <MaterialIcons
                name="pause"
                size={28}
                color={colorScheme === "dark" ? "#FFFFFF" : "#1A5F4F"}
              />
            )}
            {isLoading && (
              <ActivityIndicator
                color={colorScheme === "dark" ? "#FFFFFF" : "#1A5F4F"}
              />
            )}
          </Pressable>
        )}
        {layout && setLayout && (
          <Pressable
            onPress={() => {
              if (layout === "ayat") {
                storage.set("view_pref", "page");
                setLayout("page");
              } else {
                setLayout("ayat");
                storage.set("view_pref", "ayat");
              }
            }}
          >
            <MaterialIcons
              name={layout === "ayat" ? "view-module" : "view-list"}
              size={28}
              color={colorScheme === "dark" ? "#FFFFFF" : "#1A5F4F"}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}
