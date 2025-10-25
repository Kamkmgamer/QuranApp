import { Text, View } from "react-native";
import { MainCard } from "./components/MainCard";
import { TypeTabs } from "./components/TypeTabs";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { getSuar } from "@/services/SurahsService";
import { SearchInput } from "./components/SearchInput";
import InnerSplash from "@/components/InnerSplash";
import { Header } from "./components/Header";
import { useFocusEffect } from "expo-router";
import MosqueIllustration from "@/components/MosqueIllustration";
import { ContinePopup } from "./components/ContinePopup";
import MainDrawer from "./components/MainDrawer";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [openCont, setOpenCont] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { data, isFetched } = useQuery("suar", async () => getSuar(), {
    staleTime: Infinity,
  });

  useFocusEffect(
    useCallback(() => {
      setOpenCont(true);
    }, [])
  );

  return data && isFetched ? (
    <View className="flex-1 bg-cream dark:bg-darkBg">
      {/* Header with Mosque */}
      <View className="relative">
        <View className="absolute top-0 right-0 pt-3 pr-4 z-10">
          <Header onClickMenu={() => setOpenMenu(true)} />
        </View>
        <MosqueIllustration width={375} height={100} color="#D4AF37" />
      </View>

      {/* Content Area */}
      <View className="flex-1 px-4">
        {/* Recently Read Section */}
        <View className="mt-2">
          <Text className="text-base font-HelveticaRoman mb-3 text-golden dark:text-golden text-center">
            ماتم قرائته مؤخرا
          </Text>
          <MainCard />
        </View>

        {/* Search Section */}
        <View className="mt-4">
          <SearchInput value={search} onChange={(value) => setSearch(value)} />
        </View>

        {/* Tabs Section */}
        <View className="flex-1 mt-4">
          {data && <TypeTabs search={search} data={data} />}
        </View>
      </View>
      
      <ContinePopup isOpen={openCont} />
      <MainDrawer
        isOpen={openMenu}
        close={() => {
          setOpenMenu(false);
        }}
      />
    </View>
  ) : (
    <InnerSplash />
  );
};

export default Home;
