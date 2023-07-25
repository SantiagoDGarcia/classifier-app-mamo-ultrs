import { Text, View, Image, ImageSourcePropType } from "react-native";
import { GeneralStyles } from "../../constants";
import CustomLanguageSelector from "./CustomLanguajeSelector";

type CustomHorizontalRowProps = {
  label?: string;
  description?: string;
  iconSource?: ImageSourcePropType;
  isText?: boolean;
};

export default function CustomHorizontalRow({
  label,
  description,
  iconSource,
  isText,
}: CustomHorizontalRowProps) {
  return (
    <View style={GeneralStyles.rowTextContainer}>
      {iconSource && (
        <Image source={iconSource} style={GeneralStyles.rowTextIcon} />
      )}
      <View style={{ width: "40%" }}>
        <Text style={GeneralStyles.labelSubtitle}>{label}</Text>
      </View>
      <View style={{ width: "50%", flex: 1 }}>
        {isText ? <Text>{description}</Text> : <CustomLanguageSelector />}
      </View>
    </View>
  );
}
