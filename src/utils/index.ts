import { TLocationLocal } from "../vite-env";

export const getLocationCoords = (coords: { lat?: number; lon?: number }, resolve: () => void) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        coords.lat = position.coords.latitude;
        coords.lon = position.coords.longitude;
        resolve()
    }, () => {
        coords.lat = 0;
        coords.lon = 0;
        resolve()
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

export const getPreviousLocations = () => {
  const locations: TLocationLocal[] = JSON.parse(localStorage.getItem("locations") ?? "[]");
  locations.reverse();
  return locations;
};

export const generateRandomId = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!*&^%$£";
  let result = "";
  for (let i = 0; i < 12; i++) {
    const random = Math.floor(Math.random() * characters.length);
    result += characters[random];
  }
  return result;
};
