export const getLocation = (
  setCoordinates: (newCoords: { lat: number; lon: number }) => void
) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        lat: parseFloat(position.coords.latitude.toFixed(3)),
        lon: parseFloat(position.coords.longitude.toFixed(3)),
      });
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
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
