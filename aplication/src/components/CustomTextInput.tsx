import {
  ImageSourcePropType,
  TextInput,
  Text,
  View,
  Image,
} from "react-native";
import { COLORS, TextInputsStyles } from "../../constants";

type defaultProps = {
  value: string;
  onChangeValue: (text: string) => void;
  textPlaceholder: string;
  secureTextEntry?: boolean;
  onBlur?: any;
  stateOnBlur?: boolean;
  error?: string;
  icon?: ImageSourcePropType;
};

export default function CustomTextInput({
  value,
  onChangeValue,
  textPlaceholder,
  secureTextEntry,
  onBlur,
  stateOnBlur,
  error,
  icon,
}: defaultProps) {
  return (
    <>
      <View style={TextInputsStyles.container}>
        <TextInput
          value={value}
          style={TextInputsStyles.textInput}
          autoCapitalize="none"
          onChangeText={onChangeValue}
          placeholderTextColor={COLORS.primary}
          placeholder={textPlaceholder}
          secureTextEntry={secureTextEntry}
          onBlur={onBlur}
        />
        {icon && (
          <View style={TextInputsStyles.containerIcon}>
            <Image source={icon} style={TextInputsStyles.icon} />
          </View>
        )}
      </View>
      {error && stateOnBlur && (
        <Text style={TextInputsStyles.error}>{error} </Text>
      )}
    </>
  );
}
