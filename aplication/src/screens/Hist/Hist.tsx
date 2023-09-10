import { Text, View, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HistScreenNavigationProp } from "../../navigation/types";
import { useEffect, useState } from "react";
import { CustomActivityIndicator, CustomListItemHist } from "../../components";
import { GeneralStyles } from "../../../assets";
import { getAllHistData } from "../../services";
import { useTranslation } from "react-i18next";

export default function HistScreen() {
  const navigation = useNavigation<HistScreenNavigationProp>();

  const [loading, setLoading] = useState<boolean | null>(true);
  const [histData, setHistData]: any = useState(null);
  const { t } = useTranslation();

  const refreshData = () => {
    setLoading(true);
    getAllHistData().then((value) => {
      setHistData(value);
      setLoading(false);
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refreshData();
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={GeneralStyles.container}>
      {loading ? (
        <CustomActivityIndicator
          indicatorActive={loading}
          actionText={t("alert:loading")}
        />
      ) : (
        <View style={[GeneralStyles.subContainer, { flex: 1 }]}>
          <Text style={GeneralStyles.labelTitle}>
            {t("common:previousAnalysisHistory")}
          </Text>
          <View style={{ width: "100%", flex: 1 }}>
            <FlatList
              data={histData}
              showsVerticalScrollIndicator={false}
              style={{ backgroundColor: "white", flex: 1 }}
              overScrollMode="never"
              ListEmptyComponent={
                <Text style={{ textAlign: "center" }}>
                  {t("common:noHistResults")}
                </Text>
              }
              renderItem={({ item }) => (
                <CustomListItemHist
                  item={item}
                  navigation={navigation}
                  t={t}
                  refreshData={refreshData}
                />
              )}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
