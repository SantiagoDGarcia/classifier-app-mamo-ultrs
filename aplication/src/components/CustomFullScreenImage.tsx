import { Image, TouchableOpacity, View } from "react-native";
import {
  AnalysisStyles,
  ColorsTheme,
  FullScreenStyles,
  GeneralStyles,
  assetsIcons,
} from "../../assets";
import { Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { useContext } from "react";
import AppContext from "../hooks/createContext";

export default function CustomFullScreenLayer({
  uri,
  size,
  indexImage,
}: CustomFullScreenLayerProps) {
  const {
    activatedFullScreen: [
      activatedFullScreen,
      setActivatedFullScreen,
      fullScreenIndex,
      setFullScreenIndex,
    ],
  } = useContext(AppContext)!;
  const images = uri.map((url) => ({ url }));
  return (
    <>
      <View
        style={[AnalysisStyles.resultsSubContainer, { alignItems: "flex-end" }]}
      >
        <Image
          source={{ uri: uri[indexImage] }}
          style={[
            GeneralStyles.borderContainer,
            {
              width: size,
              height: size,
              backgroundColor: ColorsTheme.tertiary,
            },
          ]}
        />
        <TouchableOpacity
          style={FullScreenStyles.maximizeIconContainer}
          onPress={() => {
            setFullScreenIndex(indexImage);
            setActivatedFullScreen(true);
          }}
        >
          <Image
            source={assetsIcons.maximize}
            style={FullScreenStyles.maximizeIcon}
          />
        </TouchableOpacity>
      </View>
      <Modal visible={activatedFullScreen!} transparent={true}>
        <TouchableOpacity
          style={FullScreenStyles.exitIconContainer}
          onPress={() => {
            setActivatedFullScreen(false);
          }}
        >
          <Image source={assetsIcons.exit} style={FullScreenStyles.exitIcon} />
        </TouchableOpacity>
        <ImageViewer imageUrls={images} index={fullScreenIndex!} />
      </Modal>
    </>
  );
}
