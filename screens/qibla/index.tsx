import { View, Text, Pressable } from "react-native";
import QiblaCompass from "@/components/QiblaCompass";
import { useColorScheme } from "nativewind";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const Qibla = () => {
  const { colorScheme } = useColorScheme();
  return (
    <View className="flex-1 bg-cream dark:bg-darkBg">
      {/* Header */}
      <View className="pt-10 px-4 pb-6 flex-row justify-between items-center">
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <MaterialIcons
            name="arrow-forward"
            size={28}
            color={colorScheme === "dark" ? "#FFFFFF" : "#1A5F4F"}
          />
        </Pressable>
        <Text className="text-2xl text-darkGreen dark:text-textLight font-HelveticaBold">
          أتجاه القبلة
        </Text>
        <View style={{ width: 28 }} />
      </View>
      
      {/* Compass */}
      <View className="flex-1 items-center justify-center">
        <QiblaCompass
          color={colorScheme === "dark" ? "#FFFFFF" : "#1A5F4F"}
          backgroundColor="transparent"
          compassImage={
            colorScheme === "dark"
              ? require("../../assets/images/compass_dark.png")
              : require("../../assets/images/compass_light.png")
          }
          textStyles={{
            textAlign: "center",
            fontSize: 24,
            fontFamily: "HelveticaNeueLTArabic-Roman",
            color: colorScheme === "dark" ? "#FFFFFF" : "#1A5F4F",
          }}
        />
      </View>
    </View>
  );
};

export default Qibla;
