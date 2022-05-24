const convertInKm = 1.609344;
var directions;
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2xhY2szcjEiLCJhIjoiY2wyajVscGR5MHU5czNrcXc0OTF5bGpoZiJ9.YICclArUXHSAGVPQYXHgew";
navigator.geolocation.getCurrentPosition(curentLocation, errorLocation, {
  enableHighAccuracy: true,
});
function curentLocation(position) {
  intMap(position.coords.longitude, position.coords.latitude);
}
function errorLocation() {}
function intMap(longitude, latitude) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions, "top-left");
}

//container.lastChild.firstChild.firstElementChild.innerText
