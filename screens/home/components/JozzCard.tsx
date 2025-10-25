import { memo } from "react";
import { Text, Pressable } from "react-native";

const JozzCard = ({
  jozz,
  onPress,
  isGolden,
}: {
  jozz: { id: number; name: string };
  onPress?: () => void;
  isGolden?: boolean;
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`${isGolden ? 'bg-golden border-golden/30' : 'bg-white dark:bg-darkGreen/30 border-golden/20'} flex-1 mx-1 my-1 p-3 rounded-xl border items-center justify-center`}
      style={{ height: 80 }}
    >
      <Text className={`${isGolden ? 'text-white' : 'text-darkGreen dark:text-textLight'} font-HelveticaBold text-base text-center`}>
        {jozz.name}
      </Text>
    </Pressable>
  );
};

export default memo(JozzCard);
