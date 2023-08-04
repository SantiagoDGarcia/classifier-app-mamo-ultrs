import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { NavStyles } from "../../assets";
import CustomLogo from "./CustomLogo";

export function CustomNavHeader({ back, navigation }: CustomNavHeaderProps) {
  return (
    <SafeAreaView style={NavStyles.navContainer}>
      <View style={NavStyles.navSubContainer}>
        {back && (
          <TouchableOpacity
            style={NavStyles.navArrowBack}
            onPress={() => navigation.goBack()}
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
