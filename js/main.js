let map = L.map('mapid').setView([4.624, -74.066], 10.98);

let marker1 = L.marker([4.647459, -74.101314]).addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/andreag007/cjp0gdm1g03s22ro77343r2pw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcmVhZzAwNyIsImEiOiJjanAwZzZpemcwajZ2M2tvNWZveWYxbnV4In0.ijJuwTAWgqPMedERiq0dbg', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18
}).addTo(map);
