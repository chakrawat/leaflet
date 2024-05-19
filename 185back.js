let mapInitializedy = false;
function showMapttpp() {
	if (mapInitializedy) return; // If map is already initialized, do nothing
    
    mapInitializedy= true;
    // แสดงแผนที่
   
	var taxiIcon = L.icon({
		iconUrl: 'bus/image/185-Photoroom.png-Photoroom.png',
		iconSize: [130, 100]
	})
	// จุดเริ่มขึ้นรถเมล์ ฝั่งมศว
	var marker = L.marker([13.744471, 100.562416], { icon: taxiIcon,zIndexOffset: 100 }).addTo(map);

	var popupswu = L.popup({ closeOnClick: false, autoClose: false })
		.setLatLng([13.744471, 100.562416])
		// .setContent("<b>จุดเริ่มขึ้นรถเมล์ ฝั่งมศว</b><br>เมื่อเดินออกจากมหาวิทยาลัย <br>ป้ายจะอยู่ฝั่งซ้ายมือ <br>เดินถัดไปจากตลาดสุขตา<br><img src='image/สกรีนช็อต 2024-05-18 222922.png' alt='Scenic view' class='popup-image'>")
		// .openOn(map);

	// สิ้นสุดป้าย
	// var polyline = L.polyline(waypoints, { color: 'blue' }).addTo(map);
	// var newMarker = L.marker([13.715749, 100.565630], { draggable : false}).addTo(map);
		L.Routing.control({
			waypoints: [
				// ป้ายระหว่างทาง
				L.latLng(13.744471, 100.562416),
				L.latLng(13.729848, 100.560014),
				L.latLng(13.715749, 100.565630)
			],

			createMarker: function(i, waypoint, n) {
				// กำหนดชื่อสำหรับแต่ละ marker
				var markerNames = [
					'มศว',
					'ตรงข้ามศูนย์การประชุมแห่งชาติสิริกิติ์,8',
					'อู่คลองเตย,8'
					
				];
			// createMarker: function(i, waypoint, n) {
                // กำหนดรูป Marker แต่ละตำแหน่ง
                var iconUrl = 'bus/bus (1).png'; // เปลี่ยนเป็น URL ของรูปภาพ Marker ที่ต้องการใช้
                var icon = L.icon({
                    iconUrl: iconUrl,
                    iconSize: [45, 55], // ขนาดของ Marker
                    // iconAnchor: [16, 32], // จุดศูนย์กลางของ Marker ที่ติดตั้งบนแผนที่
                    // popupAnchor: [0, -32] // จุดที่ Popup จะแสดงขึ้นเมื่อคลิกที่ Marker
                });

				var marker = L.marker(waypoint.latLng, {
					icon: icon,
					draggable: false // ปิดการลาก Marker
				});
		
				marker.bindPopup(markerNames[i]); // เพิ่ม popup ที่มีชื่อของ marker
				return marker;
            

        
                // return L.marker(waypoint.latLng, {
                //     icon: icon,
                //     draggable: false, // ปิดการลาก Marker
                    
                // });
            },
            draggableWaypoints: false,
            addWaypoints: false,
            lineOptions: {
                styles: [{ color: 'red', opacity: 1, weight: 5 }]
            }

	//โค้ดรถขยับ 
		}).on('routesfound', function (e) {
			var routes = e.routes;
			console.log(routes);

			e.routes[0].coordinates.forEach(function (coord, index) {
				setTimeout(function () {
					marker.setLatLng([coord.lat, coord.lng]);
				}, 100 * index)
			});

		}).addTo(map);
	
		
}