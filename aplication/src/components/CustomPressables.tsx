import { Pressable, Text } from "react-native";
import { ColorsTheme, GeneralStyles } from "../../assets";

export function CustomButton({
  text,
  onPress,
  disable,
}: CustomPressablesProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? ColorsTheme.secondary
            : ColorsTheme.primary,
        },
        GeneralStyles.button,
      ]}
      disabled={disable}
      onPress={onPress}
    >
      <Text style={GeneralStyles.buttonText}>{text}</Text>
    </Pressable>
  );
}

export function CustomLink({ text, onPress }: CustomPressablesProps) {
  return (
    <Pressable style={GeneralStyles.buttonLink} onPress={onPress}>
      {({ pressed }) => (
        <Text style={{ textDecorationLine: pressed ? "underline" : "none" }}>
          {text}
        </Text>
      )}
    </Pressable>
  );
}
