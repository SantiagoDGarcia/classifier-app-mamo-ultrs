import { Text, View, Image } from "react-native";
import { GeneralStyles } from "../../assets";
import CustomLanguageSelector from "./CustomLanguajeSelector";

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
