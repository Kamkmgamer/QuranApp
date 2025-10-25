import { FlatList, Text } from "react-native";
import SurahCard from "./SurahCard";
import { router } from "expo-router";
import { Surah } from "@/types";

const SurahTab = ({ data, search }: { data: Surah[]; search: string }) => {
  const filterdData = data?.filter
    ? data?.filter((item) => item.name_ar.includes(search))
    : [];

  return (
    <FlatList
      data={filterdData}
      scrollEnabled
      className="flex-1"
      numColumns={2}
      contentContainerStyle={{ paddingBottom: 10 }}
      ListEmptyComponent={
        <Text className="my-8 text-center text-primaryDark font-HelveticaLight">
          لا يوجد سور
        </Text>
      }
      showsVerticalScrollIndicator={false}
      renderItem={RenderSurah}
      keyExtractor={(item, index) => item.name_ar}
    />
  );
};

export default SurahTab;

const RenderSurah = ({ item, index }: { item: Surah; index: number }) => (
  <SurahCard
    onPress={() => {
      router.push(`/surah/${item.number}`);
    }}
    key={item.number}
    sura={item}
    isGolden={index === 0}
  />
);
