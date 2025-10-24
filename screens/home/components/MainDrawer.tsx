import MyModal from "@/components/Modal";
import { Motion } from "@legendapp/motion";
import { FC, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { MenuItem } from "./MenuItem";
import { ReaderDropDown } from "./ReaderDropDown";
import { router } from "expo-router";
import { Select } from "@/components/Select";
import { storage } from "@/utils";
import { useQueryClient } from "react-query";

const MainDrawer: FC<{
  isOpen: boolean;
  close: () => void;
}> = (props) => {
  const { colorScheme } = useColorScheme();

  const items = useMemo(() => {
    return [
      {
        title: "العلامات المرجعية",
        icon: (
          <MaterialIcons
            name="bookmark"
            size={24}
            color="#FFFFFF"
          />
        ),
        onPress: () => {
          props.close();
          router.push("/favs/");
        },
      },
      {
        title: "مواقيت الصلاة",
        icon: (
          <MaterialIcons
            name="access-time"
            size={24}
            color="#FFFFFF"
          />
        ),
        onPress: () => {
          props.close();
          router.push("/prayers/");
        },
      },
      {
        title: "أتجاه القبلة",
        onPress: () => {
          props.close();
          router.push("/qibla/");
        },
        icon: (
          <MaterialIcons
            name="explore"
            size={24}
            color="#FFFFFF"
          />
        ),
      },
    ];
  }, []);

  return (
    <MyModal {...props}>
      <View className=" w-full h-full absolute bg-black/50 -z-10"></View>
      <View className="w-full h-full flex-1 justify-end ">
        <Motion.View className="bg-darkGreen shadow-xl dark:bg-darkGreen bottom-0 right-0 w-3/4 pt-8 items-start justify-start h-full ">
          <Text className="mx-4 text-xl my-2 text-golden dark:text-golden font-HelveticaBold">
            القائمة
          </Text>
          <View className="w-full border-t-[2px] border-golden/30 pt-6 dark:border-golden/30">
            {items.map((item, i) => {
              return <MenuItem key={i} {...item} />;
            })}
          </View>
          <ReaderDropDown />
          <FontSizeOptions />
        </Motion.View>
      </View>
    </MyModal>
  );
};

export default MainDrawer;

const FontSizeOptions = () => {
  const queryClient = useQueryClient();

  const [font, setFont] = useState(storage.getString("fontSize") || "20");

  return (
    <Select
      label="حجم الخط"
      data={[
        { label: "صغير", value: "16" },
        { label: "متوسط", value: "20" },
        { label: "كبير", value: "24" },
        { label: "كبير 1", value: "28" },
        { label: "كبير 2", value: "32" },
        { label: "كبير 3", value: "36" },
      ]}
      onChange={(value) => {
        setFont(value.value);
        storage.set("fontSize", value.value);
        queryClient.invalidateQueries({ queryKey: ["fontSize"] });
      }}
      value={font}
      itemFontSize={parseInt(font)}
    />
  );
};
