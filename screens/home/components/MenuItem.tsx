import { Pressable, Text, View } from "react-native";

interface ItemProps {
  icon: React.JSX.Element;
  title: string;
  onPress?: () => void;
}
export function MenuItem({ icon, title, onPress }: ItemProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center justify-start py-4 gap-x-5 px-5"
    >
      <View>{icon}</View>
      <Text className="text-textLight dark:text-textLight text-base font-HelveticaRoman">
        {title}
      </Text>
    </Pressable>
  );
}
