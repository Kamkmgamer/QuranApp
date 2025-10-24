import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { Dropdown } from "react-native-element-dropdown";

export const Select = ({
  value,
  onChange,
  label,
  data,
}: {
  value: string | { label: string; value: string } | null | undefined;
  onChange: (value: { label: string; value: string }) => void;
  label?: string;
  data: { label: string; value: string }[];
  itemFontSize?: number;
}) => {
  const { colorScheme } = useColorScheme();

  const styles = StyleSheet.create({
    container: { borderWidth: 0, borderRadius: 12, overflow: "hidden" },
    dropdown: {
      marginHorizontal: 16,
      borderRadius: 12,
      borderColor: "#D4AF37",
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderWidth: 2,
      width: "80%",
      direction: "ltr",
      backgroundColor: "transparent",
    },
    item: {
      fontFamily: "HelveticaNeueLTArabic-Roman",
      fontSize: 14,
      color: "#FFFFFF",
    },
    itemContainerStyle: {
      backgroundColor: "#155045",
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 14,
    },
    selectedStyle: {
      backgroundColor: "#155045",
    },
    selectedTextStyle: {
      fontSize: 14,
      fontFamily: "HelveticaNeueLTArabic-Roman",
      color: "#FFFFFF",
    },
    iconStyle: {
      display: "none",
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 14,
    },
  });

  return (
    <View className="w-full">
      {label && (
        <Text className="mx-4 my-3 text-textLight dark:text-textLight font-HelveticaBold text-base">
          {label}
        </Text>
      )}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        renderLeftIcon={() => (
          <View style={{ transform: "rotate(90deg)" }}>
            <MaterialIcons
              name="chevron-right"
              size={24}
              color="#D4AF37"
            />
          </View>
        )}
        inputSearchStyle={styles.inputSearchStyle}
        itemTextStyle={styles.item}
        itemContainerStyle={styles.itemContainerStyle}
        containerStyle={styles.container}
        activeColor="#2D7A67"
        iconStyle={styles.iconStyle}
        value={value}
        valueField="value"
        onChange={(value) => {
          onChange(value);
        }}
        labelField="label"
        data={data}
      />
    </View>
  );
};
