import { Divider } from "@rneui/themed";
import { Text } from "react-native";
import { ColorsTheme } from "../../constants";

type CustomDividerTextProps = {
  positionLeft?: boolean;
  text: string;
};

export function CustomDivider() {
  return (
    <Divider
      width={1}
      color={ColorsTheme.primary}
      style={{ width: "100%", alignSelf: "center" }}
    />
  );
}

export function CustomDividerText({
  positionLeft,
  text,
}: CustomDividerTextProps) {
  return (
    <Text
      style={{
        alignSelf: positionLeft ? "flex-start" : "flex-end",
        color: ColorsTheme.primary,
        paddingBottom: 5,
      }}
    >
      {text}
    </Text>
  );
}
