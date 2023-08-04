import { Alert } from "react-native";

export function timeConverter(date: string): string {
  var newDate = new Date(date);
  return newDate.toLocaleDateString();
}

export function getDurationAnalysis(seconds: number): string {
  // Convert seconds to minutes
  const minutes = seconds / 60;

  // Round up to the nearest minute
  const roundedMinutes = Math.ceil(minutes);

  // Return the result as a string
  return `${roundedMinutes} min.`;
}

export function showAlert(message: string): void {
  Alert.alert(message);
}
