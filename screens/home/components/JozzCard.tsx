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
      className={`${isGolden ? 'bg-golden dark:bg-golden' : 'bg-white dark:bg-darkGreen/30'} basis-2 my-2 p-4 w-full rounded-2xl px-6 flex-1 flex-row items-center justify-center border border-golden/20`}
    >
      <Text className={`${isGolden ? 'text-white' : 'text-darkGreen dark:text-textLight'} font-HelveticaBold text-lg text-center w-full`}>
        {jozz.name}
      </Text>
    </Pressable>
  );
};

export default memo(JozzCard);
