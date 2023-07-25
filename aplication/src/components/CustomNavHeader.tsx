import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { NavStyles } from "../../constants";
import CustomLogo from "./CustomLogo";
import { navigationRef } from "../../src/navigation/NavigationRouter";

type CustomNavHeaderProps = {
  back?: boolean;
  navigation: any;
  customRoute?: string;
};

export function CustomNavHeader({
  back,
  navigation,
  customRoute,
}: CustomNavHeaderProps) {
  // if (navigationRef.current.getCurrentRoute().name == "Hist") {
  //   console.log("Si");
  //   navigation.navigate("AnalysisNav");
  // }
  return (
    <SafeAreaView style={NavStyles.navContainer}>
      <View style={NavStyles.navSubContainer}>
        {back && (
          <TouchableOpacity
            style={NavStyles.navArrowBack}
            onPress={() =>
              customRoute
                ? navigation.navigate(customRoute)
                : navigation.goBack()
            }
          >
            <MaterialCommunityIcons
              name={"arrow-left"}
              size={30}
              color="black"
            />
          </TouchableOpacity>
        )}
        <CustomLogo />
      </View>
    </SafeAreaView>
  );
}
