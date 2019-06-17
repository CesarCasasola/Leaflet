var map = null; 
var marker = null;  
var lat, lng = null;
window.onload = function()
{
    map = L.map('map').setView([14.966013251567164, -88.26416015625], 5.5);
    L.tileLayer( 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
        maxZoom: 18,
    }).addTo(map);
    marker = L.marker();
    map.on('click', handleMapClick);
}

function handleMapClick(e){
    marker.setLatLng(e.latlng).addTo(map);
    lat = e.latlng.lat;
    lng = e.latlng.lng;
    displayCoordinates();
}

function handleCoordChange(){
    lat = document.getElementById('lat').value;
    lng = document.getElementById('lng').value;
    marker.setLatLng({'lat': lat, 'lng': lng}).addTo(map);
    map.setView({'lat': lat, 'lng': lng}, 10);
}

function displayCoordinates(){
    document.getElementById('lat').value = lat;
    document.getElementById('lng').value = lng;
}