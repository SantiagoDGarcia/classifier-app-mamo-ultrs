import { REACT_APP_API_EVALUATE } from "@env";
import { auth } from "./firebase";

// gets the url according to the parameters
function urlApi(type: string, extract_roi: boolean): string {
  // Convert the type to lowercase and check if it starts with "u"
  const typeLower =
    type[0].toLowerCase() === "u" ? "ultrasound" : "mammography";

  // Construct the API URL using the type and extract_roi parameters
  const link =
    REACT_APP_API_EVALUATE + `${typeLower}/?extract_roi=${extract_roi}`;

  return link;
}

export async function analizeImage(
  type: string,
  extract_roi: boolean,
  source: any
): Promise<any> {
  const userId = auth.currentUser!.uid;

  // Create a new FormData object
  let formdata = new FormData();

  // Get the file extension from the source URI
  const extension = source.assets[0].uri.split(".").pop();

  // Create a photo object with the URI, type, and extension of the source image
  let photo = {
    uri: source.assets[0].uri,
    type: source.assets[0].type + "/" + extension,
  };
  // Append the userId parameter to the FormData object
  formdata.append("userId", userId);

  // Append the photo to the FormData object
  formdata.append("file", {
    uri: photo.uri,
    name: `image.${extension}`,
    type: photo.type,
  });

  // Make a POST request to the API with the FormData as the body
  return fetch(urlApi(type, extract_roi), {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formdata,
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log("Error al cargar solicitud", err);
      return new Error(err);
    });
}
