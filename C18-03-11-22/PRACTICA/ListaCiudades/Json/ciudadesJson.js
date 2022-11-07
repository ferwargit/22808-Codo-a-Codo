import cities from "./cities.json" assert { type: "json" };

cities.map((ciudad) => {
  console.log(ciudad);
  console.log("Key: " + ciudad.Key);
  console.log("País: " + ciudad.Country.LocalizedName);
  console.log("Ciudad: " + ciudad.LocalizedName);
  console.log("Latitud: " + ciudad.GeoPosition.Latitude);
  console.log("Longitud: " + ciudad.GeoPosition.Longitude);
  console.log("Elevación: " + ciudad.GeoPosition.Elevation.Metric.Value + " " + ciudad.GeoPosition.Elevation.Metric.Unit);
});
