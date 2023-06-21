import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { NavStyles } from "../../constants";
// Custom components
import CustomLogo from "./CustomLogo";

type defaultProps = {
  back?: boolean;
};

export function CustomNavHeader({ back }: defaultProps) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={NavStyles.navContainer}>
      <View style={NavStyles.navSubContainer}>
        {back && (
          <View style={NavStyles.navArrowBack}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name={"arrow-left"}
                size={30}
                color="black"
              />
            </TouchableOpacity>
          </View>
        )}
        <CustomLogo />
      </View>
    </SafeAreaView>
  );
}
