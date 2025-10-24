import { ActivityIndicator, Pressable, View } from "react-native";
import { Text } from "react-native";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import { MaterialIcons } from "@expo/vector-icons";
import { storage } from "@/utils";
import IslamicPattern from "@/components/IslamicPattern";

export function Header({
  title,
  subtitle,
  layout,
  setLayout,
  isLoading,
  isPlaying,
  stop,
}: {
  title?: string;
  subtitle?: string;
  setLayout: React.Dispatch<React.SetStateAction<"ayat" | "page">>;
  layout: "ayat" | "page";
  stop: () => void;
  isPlaying: boolean;
  isLoading: boolean;
}) {
  const { colorScheme } = useColorScheme();
  return (
    <View className="relative">
      {/* Islamic Pattern Background */}
      <View className="absolute top-0 left-0 right-0 z-0">
        <IslamicPattern 
          width={375} 
          height={120} 
          primaryColor={colorScheme === "dark" ? "#0F3D32" : "#1A5F4F"}
          secondaryColor="#D4AF37"
        />
      </View>
      
      {/* Header Content */}
      <View className="relative z-10 flex flex-row justify-between items-center px-4 py-4 h-[120px]">
        {/* Back Button */}
        <Pressable
          onPress={() => {
            router.back();
          }}
          className="items-center justify-center"
        >
          <MaterialIcons
            name="arrow-forward"
            size={28}
            color="#FFFFFF"
          />
        </Pressable>

        {/* Title Section */}
        <View className="flex-1 items-center justify-center">
          <View className="bg-white dark:bg-white/95 rounded-full px-8 py-2 mb-2">
            <Text className="font-HelveticaBold text-xl text-darkGreen dark:text-darkGreen text-center">
              {title}
            </Text>
          </View>
          <Text className="font-HelveticaLight text-sm text-golden dark:text-golden text-center">
            {subtitle}
          </Text>
        </View>

        {/* Audio Control */}
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
              color="#FFFFFF"
            />
          )}
          {isLoading && (
            <ActivityIndicator
              color="#FFFFFF"
            />
          )}
          {!isPlaying && !isLoading && (
            <View style={{ width: 28 }} />
          )}
        </Pressable>
      </View>
    </View>
  );
}
