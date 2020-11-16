/**
 * This is the JS page for my custom locations to be shown on the Google Map.
 */

/**
 * @const name of location are given before the latitude and location to indicate the name of the establishment where the event can be found.
 * @type {string} 
 * @property {number}
 * @param {LatLng}
 */


const ALE_HOUSE = {
  lat: 51.02063751220703,
  lng: -3.1040375232696533,
};

const PITCHER_PIANO = {
  lat: 51.01443099975586,
  lng: -3.1043453216552734,
};

const PUMP_HOUSE = {
  lat: 50.988731384277344,
  lng: -3.2471413612365723,
};

/**
 * This function creates the map center and markers when the page loads. Chosen to be above Taunton, Somerset, UK as this is where the artists reside.
 * @type {number}
 * @param {zoom} sets the zoom level from the centralised location.
 * @type {string}
 * @param {center}
 * @param {LatLng} sets the location of the centralised location.
 */

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: 51.0147895,
      lng: -3.1029086,
    },
  });

  /**
   * @type {string}
   * @param {labels} sets the labels that will be indicated on the map for each marker.
   */

  var labels = "ABC";

  /**
   * @type {Array}
   * @param {locations} calls the @const locations defined above.
   */

  var locations = [
    ALE_HOUSE,
    PITCHER_PIANO,
    PUMP_HOUSE,
  ];

  /**
   * @name {markers}
   * @type {object} creates the markers on the Google Map.
   * @param {position} uses the above location array to pinpoint the markers on the map.
   * @param {labels} iterates through the labels string and assigns each one to a location on the map.
   */

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i & labels.length],
    });
  });

  /**
   * @name {MarkerClusterer} clusters the markers together in a handy button, seen on the map, when they are very close together.
   * @type {object}
   * @param {imagePath} takes the image of the markerClusterer from the Google Maps documentation.
   */

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}