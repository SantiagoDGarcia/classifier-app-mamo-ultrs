import { Alert } from "react-native";

export function timeConverter(date: string) {
  var newDate = new Date(date);
  return newDate.toLocaleDateString();
}
export function showAlert(message: string) {
  Alert.alert(message);
}
