import { Divider } from "@rneui/themed";
import { Pressable, Text } from "react-native";
import { COLORS } from "../../constants";

type defaultProps = {
  positionLeft?: boolean;
  text: string;
};

export function CustomDivider() {
  return (
    <Divider
      width={1}
      color={COLORS.primary}
      style={{ width: "100%", alignSelf: "center" }}
    />
  );
}

export function CustomDividerText({ positionLeft, text }: defaultProps) {
  return (
    <Text
      style={[
        {
          alignSelf: positionLeft ? "flex-start" : "flex-end",
          color: COLORS.primary,
          paddingBottom: 5,
        },
      ]}
    >
      {text}
    </Text>
  );
}
