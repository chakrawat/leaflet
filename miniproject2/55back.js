function showMapttps() {
    // แสดงแผนที่
   
    var mapElementp = document.getElementById("map");
        mapElementp.style.display = "block";

        var taxiIcon = L.icon({
			iconUrl: 'https://cdn-icons-png.flaticon.com/128/1023/1023464.png',
			iconSize: [70, 70]
		})
        // จุดเริ่มขึ้นรถเมล์ ฝั่งมศว
		var marker = L.marker([13.744471, 100.562416], { icon: taxiIcon }).addTo(map);

		// สิ้นสุดป้าย
			var newMarker = L.marker([13.709933, 100.563635], { draggable : false}).addTo(map);
			L.Routing.control({
				waypoints: [
                    // ป้ายระหว่างทาง
					L.latLng(13.744471, 100.562416),                 
                    L.latLng(13.729848, 100.560014),                   
                    L.latLng(13.719679, 100.560774),
                    L.latLng(13.719078, 100.563400),
                    L.latLng(13.718142, 100.566921),
                    L.latLng(13.7129917,100.5646972),
                    L.latLng(13.7093634,100.5641987),
                    L.latLng(13.709933, 100.563635),
                    // L.latLng(),
				],
				createMarker :function(i, waypoint, n) {
					return L.marker(waypoint.latLng, {
						draggable : false
					});
				},
				draggableWaypoints: false,
				addWaypoints: false

        //โค้ดรถขยับ 
			}).on('routesfound', function (e) {
				var routes = e.routes;
				console.log(routes);

				e.routes[0].coordinates.forEach(function (coord, index) {
					setTimeout(function () {
						marker.setLatLng([coord.lat, coord.lng]);
					}, 100 * index)
				})

			}).addTo(map);
}