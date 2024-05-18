function showMapt() {
    // แสดงแผนที่
   
    var mapElementp = document.getElementById("map");
        mapElementp.style.display = "block";
  
  
        
          
		var taxiIcon = L.icon({
			iconUrl: 'https://cdn-icons-png.flaticon.com/128/1023/1023464.png',
			iconSize: [70, 70]
		})
        // จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข้ามมศว
		var marker = L.marker([13.745735, 100.562580

                    ], { icon: taxiIcon }).addTo(map);

		// สิ้นสุดป้าย
			var newMarker = L.marker([13.807173, 100.511883
                    ], { draggable : false}).addTo(map);

			L.Routing.control({
				waypoints: [
                    // ป้ายระหว่างทาง
					L.latLng(13.745735, 100.562580),                   
                    L.latLng(13.756061, 100.562849),
                    L.latLng(13.760860, 100.553787),
                    L.latLng(13.764642, 100.537720),
                    L.latLng(13.7676965,100.5317999),
                    L.latLng(13.778011, 100.512221),
                    L.latLng(13.788672, 100.515676),
                    L.latLng(13.790517, 100.515392),
                    L.latLng(13.813867, 100.518521),
                    L.latLng(13.807173, 100.511883),
                    // L.latLng(),
                    // L.latLng()
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
