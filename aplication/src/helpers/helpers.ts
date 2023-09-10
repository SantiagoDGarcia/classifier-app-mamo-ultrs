import { AuthErrorCodes } from "firebase/auth";
import { TFunction } from "i18next";
import { Alert } from "react-native";

export function getCreationTime(date: string): string {
  var newDate = new Date(date);
  return newDate.toLocaleDateString();
}

export function getTimePosted(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString();
}

export function getDurationAnalysis(minutes: number): string {
  const roundedMinutes = Math.ceil(minutes);
  return `${roundedMinutes} min.`;
}

export function showAlert(titleMessage: string, message: string): void {
  Alert.alert(titleMessage, message);
}

export function showError(error: string, t: TFunction): void {
  const errorMessages: Record<string, string> = {
    // Generals
    ["Error: Operation timed out"]: t("alert:operationTimedOut"),
    "NO CHOOSE IMAGE": t("alert:chooseImage"),
    // Evaluate
    "NO FILE ALLOWED": t("alert:errorNofileAllowed"),
    "NO ROI FOUND": t("alert:errorNoRoiFound"),
    // Firebase
    [AuthErrorCodes.USER_DELETED]: t("alert:invalidEmail"),
    [AuthErrorCodes.INVALID_EMAIL]: t("alert:invalidEmail"),
    [AuthErrorCodes.INVALID_PASSWORD]: t("alert:errorLoginCredentials"),
    [AuthErrorCodes.USER_DELETED]: t("alert:errorLoginCredentials"),
    "auth/missing-email": t("alert:invalidEmail"),
  };
  const message = errorMessages[error] || `${t("alert:errorGeneric")}`;
  const titleMessage = t("alert:errorHasOcurred");
  showAlert(titleMessage, message);
}
