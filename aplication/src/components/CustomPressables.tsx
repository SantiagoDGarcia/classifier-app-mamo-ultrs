import { Pressable, Text } from "react-native";
import { COLORS, GeneralStyles } from "../../constants";

type defaultProps = {
  text: string;
  onPress?: () => void;
  disable?: boolean;
};
export function CustomButton({ text, onPress, disable }: defaultProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? COLORS.secondary : COLORS.primary },
        GeneralStyles.button,
      ]}
      disabled={disable}
      onPress={onPress}
    >
      <Text style={GeneralStyles.buttonText}> {text}</Text>
    </Pressable>
  );
}

export function CustomLink({ text, onPress }: defaultProps) {
  return (
    <Pressable style={GeneralStyles.buttonLink} onPress={onPress}>
      {({ pressed }) => (
        <Text style={[{ textDecorationLine: pressed ? "underline" : "none" }]}>
          {text}
        </Text>
      )}
    </Pressable>
  );
}
