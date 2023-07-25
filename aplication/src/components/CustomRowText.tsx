import { Text, View, ImageSourcePropType, Image } from "react-native";
import { GeneralStyles } from "../../constants";

type defaultProps = {
  label?: string;
  description?: string;
  iconSource: ImageSourcePropType;
};

export default function CustomRowText({
  label,
  description,
  iconSource,
}: defaultProps) {
  return (
    <View style={GeneralStyles.rowTextContainer}>
      <Image source={iconSource} style={GeneralStyles.rowTextIcon} />
      <View style={{ width: "40%" }}>
        <Text style={GeneralStyles.labelSubtitle}>{label}</Text>
      </View>
      <View style={{ width: "50%", flex: 1 }}>
        <Text>{description}</Text>
      </View>
    </View>
  );
}
