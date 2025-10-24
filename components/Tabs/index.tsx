import { Pressable, Text, View } from "react-native";

interface Props {
  tabs: { name: string; title: string }[];
  activeTab?: string;
  setTab: (name: string) => void;
  className?: string;
  vertical?: boolean;
}
const Tabs = ({ tabs, activeTab, setTab, vertical = false }: Props) => {
  return (
    <View className={`w-full h-12 bg-lightBeige dark:bg-darkBg rounded-xl p-1`}>
      <View className={`w-full flex-1 flex-row justify-between gap-1`}>
        {tabs.map((item, index) => (
          <Pressable
            className={`flex-1 rounded-lg ${item.name === activeTab ? 'bg-darkGreen dark:bg-darkGreen' : 'bg-transparent'}`}
            onPress={() => setTab(item.name)}
            key={index}
          >
            <Text
              className={`text-sm text-center w-full py-2 ${
                item.name === activeTab
                  ? "font-HelveticaBold text-textLight dark:text-textLight"
                  : "font-HelveticaRoman text-textGray dark:text-textLight/70"
              }`}
            >
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Tabs;
