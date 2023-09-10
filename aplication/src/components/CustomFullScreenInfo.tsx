import { Image, TouchableOpacity, Text } from "react-native";
import { FullScreenStyles, assetsIcons } from "../../assets";
import { Modal } from "react-native";
import { useContext } from "react";
import { AppContext } from "../hooks";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomFullScreenInfo({
  actionableText,
  titlecustomView,
  customView,
}: CustomFullScreenInfoProps) {
  const {
    activatedFullScreen: [activatedFullScreen, setActivatedFullScreen],
  } = useContext(AppContext)!;

  return (
    <>
      <TouchableOpacity onPress={() => setActivatedFullScreen(true)}>
        <Text style={{ textDecorationLine: "underline" }}>
          {actionableText}
        </Text>
      </TouchableOpacity>

      <Modal visible={activatedFullScreen!} transparent={true}>
        {titlecustomView && (
          <Text style={FullScreenStyles.titleContainerInfo}>
            {titlecustomView}
          </Text>
        )}
        <TouchableOpacity
          style={FullScreenStyles.exitIconContainerInfo}
          onPress={() => setActivatedFullScreen(false)}
        >
          <Image source={assetsIcons.exit} style={FullScreenStyles.exitIcon} />
        </TouchableOpacity>
        <SafeAreaView style={FullScreenStyles.containerViewInfo}>
          {customView}
        </SafeAreaView>
      </Modal>
    </>
  );
}
