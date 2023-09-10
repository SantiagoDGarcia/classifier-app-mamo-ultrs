import { REACT_APP_API_EVALUATE } from "@env";
import { auth } from "./firebase";

// Send and receive response from backend
export async function analizeImage({
  typeAnalysis,
  extractRoi,
  source,
}: ApiAnalizeImageProps): Promise<any> {
  const formdata = new FormData();
  const authToken = await auth.currentUser!.getIdToken(/* forceRefresh */ true);
  const extension = source.assets[0].uri.split(".").pop();
  const timeoutResponse = 10 * 60 * 1000;
  const typeLower =
    typeAnalysis[0].toLowerCase() === "u" ? "ultrasound" : "mammography";
  const urlApi =
    "http://192.168.1.6:8000/evaluate-image/" +
    `${typeLower}/?extract_roi=${extractRoi}`;
  console.log(urlApi);
  await new Promise((resolve) => setTimeout(resolve, 4000));

  formdata.append("file", {
    uri: source.assets[0].uri,
    name: `image.${extension}`,
    type: source.assets[0].type + "/" + extension,
  });

  const fetchPromise = fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${authToken}`,
    },
    body: formdata,
  }).then((response) => response.json());

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Operation timed out")), timeoutResponse)
  );
  return Promise.race([fetchPromise, timeoutPromise]);
}
