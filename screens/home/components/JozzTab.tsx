import { FlatList, Text } from "react-native";
import { router } from "expo-router";
import JozzCard from "./JozzCard";
import { useQuery } from "react-query";
const JozzTab = ({ search }: { search: string }) => {
  const { data } = useQuery(
    "jozzs",
    async () => {
      let JozzArray: { id: number; name: string }[] = [];
      Array.apply(0, Array(30)).forEach((item, index) => {
        JozzArray.push({
          id: index + 1,
          name: `الجزء ${index + 1}`,
        });
      });
      return JozzArray;
    },
    { cacheTime: Infinity }
  );

  const filterdData = data?.filter
    ? data?.filter((item) => item.name.includes(search))
    : [];

  return (
    <FlatList
      data={filterdData}
      scrollEnabled
      className="flex-1"
      numColumns={2}
      contentContainerStyle={{ paddingBottom: 10 }}
      initialNumToRender={10}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={
        <Text className="my-8 text-center text-gray-300 font-HelveticaLight">
          لا يوجد
        </Text>
      }
      renderItem={({ item, index }) => (
        <JozzCard
          onPress={() => {
            router.push(`/jozz/${item.id}`);
          }}
          key={item.id}
          jozz={item}
          isGolden={index === 0}
        />
      )}
    />
  );
};

export default JozzTab;
