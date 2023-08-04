import { TextInput, Text, View, Image } from "react-native";
import { ColorsTheme, TextInputsStyles } from "../../assets";

export default function CustomTextInput({
  value,
  onChangeValue,
  textPlaceholder,
  secureTextEntry,
  onBlur,
  stateOnBlur,
  error,
  icon,
}: CustomTextInputProps) {
  return (
    <>
      <View style={TextInputsStyles.container}>
        <TextInput
          value={value}
          style={TextInputsStyles.textInput}
          autoCapitalize="none"
          onChangeText={onChangeValue}
          placeholderTextColor={ColorsTheme.primary}
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
