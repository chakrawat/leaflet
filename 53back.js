function showMapttppt() {
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
			var newMarker = L.marker([13.749329, 100.501728], { draggable : false}).addTo(map);
			L.Routing.control({
				waypoints: [
                    // ป้ายระหว่างทาง
					L.latLng(13.744471, 100.562416),
                    L.latLng(13.739711, 100.561905),
                    L.latLng(13.740686, 100.554904), 
                    L.latLng(13.744195, 100.541908), 
                    L.latLng(13.731127, 100.537439), 
                    L.latLng(13.7299338,100.5352441), 
                    L.latLng(13.732206, 100.529822), 
                    L.latLng(13.737101, 100.517798), 
                    L.latLng(13.737688, 100.514592), 
                    L.latLng(13.738467, 100.512332), 
                    L.latLng(13.741650, 100.507553), 
                    L.latLng(13.745429, 100.502681), 
                    L.latLng(13.756080, 100.503830), 
                    L.latLng(13.749329, 100.501728)               
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