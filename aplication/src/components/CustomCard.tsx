import {
  Text,
  View,
  TouchableHighlight,
  ImageSourcePropType,
  Image,
  StyleProp,
  TextStyle,
} from "react-native";
import { CustomDivider } from "./CustomDivider";
import { CardStyles } from "../../constants";

interface CustomCardProps {
  positionLeft?: boolean;
  title: string;
  imgSource: ImageSourcePropType;
  iconSource: ImageSourcePropType;
  navigation: any;
}

export default function CustomCard({
  positionLeft,
  title,
  imgSource,
  iconSource,
  navigation,
}: CustomCardProps) {
  const orientationStyle: StyleProp<TextStyle> = positionLeft
    ? CardStyles.titleLeft
    : CardStyles.titleRight;

  return (
    <View style={CardStyles.layout}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Test", { typeAnalysis: title })}
        underlayColor="white"
        style={{ borderRadius: 7, width: "100%" }}
      >
        <View
          style={[
            CardStyles.container,
            { alignSelf: positionLeft ? "flex-start" : "flex-end" },
          ]}
        >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={imgSource} style={CardStyles.image} />
          </View>
          <Text style={orientationStyle}>{title}</Text>
        </View>
      </TouchableHighlight>
      <View>
        <Image
          source={iconSource}
          style={[
            CardStyles.icon,
            { alignSelf: !positionLeft ? "flex-start" : "flex-end" },
          ]}
        />
        <CustomDivider />
      </View>
    </View>
  );
}
