import { View } from "react-native";
import { router, useFocusEffect } from "expo-router";
import { storage } from "@/utils";
import { useCallback, useState } from "react";
import { Recent } from "@/types";
import CardContent from "./CardContent";
import { NoRecentView } from "./NoRecentView";

export function MainCard() {
  const [recent, setRecent] = useState<Recent>();
  const [view, setView] = useState<"page" | "ayat">();

  useFocusEffect(
    useCallback(() => {
      const recentJSON = storage.getString("recent");
      const viewString = storage.getString("view_pref");
      if (recentJSON) setRecent(JSON.parse(recentJSON));
      if (viewString) setView(viewString as "page" | "ayat");
    }, [])
  );

  const noPageAyaText =
    recent?.type === "surah"
      ? `الأية : ${recent?.aya || 1}`
      : `${recent?.name} الأية : ${recent?.aya}`;

  const pageTextAya =
    recent?.type === "surah"
      ? `الصفحة  ${recent.page} `
      : ` سورة ${recent?.name} `;

  return (
    <View className="mt-3 bg-darkGreen dark:bg-darkGreen w-full rounded-3xl px-6 relative py-6">
      {recent && (recent?.aya || recent?.page) && (
        <CardContent
          primary_text={
            recent.type === "surah" ? recent?.name : `الجزء ${recent.id}`
          }
          secondary_text={
            recent.page && view === "page" ? pageTextAya : noPageAyaText
          }
          onClick={() => {
            router.push(
              `/${recent.type === "surah" ? "surah" : "jozz"}/${recent.id}s${
                recent.page && view === "page" ? recent.page : recent.index || 1
              }`
            );
          }}
        />
      )}

      {!recent && <NoRecentView />}
    </View>
  );
}
