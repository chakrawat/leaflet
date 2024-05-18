function showMapttp() {
    // แสดงแผนที่
   
    var mapElementp = document.getElementById("map");
        mapElementp.style.display = "block";

        var taxiIcon = L.icon({
			iconUrl: 'https://cdn-icons-png.flaticon.com/128/416/416739.png',
			iconSize: [70, 70]
		})
        // จุดเริ่มขึ้นรถเมล์ ฝั่งมศว
		var marker = L.marker([13.744471, 100.562416], { icon: taxiIcon }).addTo(map);

		// สิ้นสุดป้าย
			var newMarker = L.marker([13.715775, 100.565635], { draggable : false}).addTo(map);
			L.Routing.control({
				waypoints: [
                    // ป้ายระหว่างทาง
					L.latLng(13.744471, 100.562416),
                    // L.latLng(13.744474, 100.562417),
                    // L.latLng(13.742174, 100.562141),
                    // L.latLng(13.739712, 100.561873),
                    // L.latLng(13.734328, 100.560683),
                    L.latLng(13.729848, 100.560014),
                    // L.latLng(13.726081, 100.560509),
                    // L.latLng(13.723680, 100.560426),
                    // L.latLng(13.7186373,100.5586625),
                    // L.latLng(13.716485, 100.561110),
                    // L.latLng(13.715399, 100.563802),
                    // L.latLng(),
                    L.latLng(13.715749, 100.565630)
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