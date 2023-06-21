import {
  Text,
  View,
  TouchableHighlight,
  ImageSourcePropType,
  Image,
  StyleProp,
  TextStyle,
  FlexAlignType,
} from "react-native";
import { CustomDivider } from "./CustomDivider";
import { CardStyles } from "../../constants";

type defaultProps = {
  positionLeft?: boolean;
  title: string;
  imgSource: ImageSourcePropType;
  iconSource: ImageSourcePropType;
  navigation: any;
};

export default function CustomCard({
  positionLeft,
  title,
  imgSource,
  iconSource,
  navigation,
}: defaultProps) {
  const orientationStyle: StyleProp<TextStyle> = positionLeft
    ? CardStyles.titleLeft
    : CardStyles.titleRight;
  const orientation: FlexAlignType = positionLeft ? "flex-start" : "flex-end";
  const orientationInv: FlexAlignType = !positionLeft
    ? "flex-start"
    : "flex-end";
  return (
    <View style={CardStyles.layout}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Test")}
        underlayColor="white"
        style={{ borderRadius: 7, width: "100%" }}
      >
        <View style={[CardStyles.container, { alignSelf: orientation }]}>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={imgSource} style={CardStyles.image} />
          </View>
          <Text style={orientationStyle}>{title}</Text>
        </View>
      </TouchableHighlight>
      <View>
        <Image
          source={iconSource}
          style={[CardStyles.icon, { alignSelf: orientationInv }]}
        />
        <CustomDivider />
      </View>
    </View>
  );
}
