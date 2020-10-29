function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: 51.0147895,
      lng: -3.1029086,
    },
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    { lat: 51.02063751220703, lng: -3.1040375232696533 },
    { lat: 51.01443099975586, lng: -3.1043453216552734 },
    { lat: 50.988731384277344, lng: -3.2471413612365723 },
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i & labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
