import { View } from "react-native";
import { useState } from "react";
import Tabs from "@/components/Tabs";
import SurahTab from "./SurahTab";
import JozzTab from "./JozzTab";
import { Surah } from "@/types";
import { AzkarTab } from "./AzkarTab";

export const TypeTabs = (props: { data: Surah[]; search: string }) => {
  const [tab, setTab] = useState<string>("surah");

  return (
    <View className="flex-1">
      <Tabs
        setTab={(name) => {
          setTab(name);
        }}
        activeTab={tab}
        tabs={tabs(props)}
      />
      <View className="flex-1 mt-2">
        {tabs(props).filter((ta) => ta.name === tab)[0]?.component}
      </View>
    </View>
  );
};
export const tabs = (props: { data: Surah[]; search: string }) => [
  { name: "surah", title: "سورة", component: <SurahTab {...props} /> },
  {
    name: "chapter",
    title: "حزب",
    component: <JozzTab search={props.search} />,
  },
  {
    name: "page",
    title: "صفحة",
    component: <SurahTab {...props} />,
  },
  {
    name: "ayah",
    title: "أية",
    component: <AzkarTab search={props.search} />,
  },
];
