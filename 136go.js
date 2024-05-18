function showMapa() {
    // แสดงแผนที่
   
    var mapElementp = document.getElementById("map");
        mapElementp.style.display = "block";

        var taxiIcon = L.icon({
			iconUrl: 'https://cdn-icons-png.flaticon.com/128/416/416739.png',
			iconSize: [70, 70]
		})
        // จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข้ามมศว
		var marker = L.marker([13.745735, 100.562580

                    ], { icon: taxiIcon }).addTo(map);

		// สิ้นสุดป้าย
			var newMarker = L.marker([13.810458, 100.548710
                    ], { draggable : false}).addTo(map);

			L.Routing.control({
				waypoints: [
                    // ป้ายระหว่างทาง
					L.latLng(13.745735, 100.562580),
                    L.latLng(13.7580019,100.5650984),
                    L.latLng(13.797399, 100.574385),
                    L.latLng(13.814942, 100.575262),
                    L.latLng(13.825060, 100.567144),
                    L.latLng(13.8034879,100.5542002),
                    L.latLng(13.799017, 100.541445),
                    L.latLng(13.803962, 100.543235),
                    L.latLng(13.804932, 100.540819),
                    L.latLng(13.797834, 100.542493),
                    L.latLng(13.810458, 100.548710)
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