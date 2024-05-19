let mapInitializedssss = false;
function showMapttppt() {
	if (mapInitializedssss) return; // If map is already initialized, do nothing
    
    mapInitializedssss= true;
    // แสดงแผนที่
   
    var mapElementp = document.getElementById("map");
        mapElementp.style.display = "block";


        
		var taxiIcon = L.icon({
			iconUrl: 'bus/image/3-53-Photoroom.png-Photoroom.png',
			iconSize: [130, 100]
		})
        // จุดเริ่มขึ้นรถเมล์ ฝั่งมศว
		var marker = L.marker([13.744471, 100.562416], { icon: taxiIcon,
			zIndexOffset: 100
		 }).addTo(map);

		var popupswu = L.popup({ closeOnClick: false, autoClose: false })
            .setLatLng([13.744471, 100.562416])
            // .setContent("<b>จุดเริ่มขึ้นรถเมล์ ฝั่งมศว</b><br>เมื่อเดินออกจากมหาวิทยาลัย <br>ป้ายจะอยู่ฝั่งซ้ายมือ <br>เดินถัดไปจากตลาดสุขตา<br><img src='image/สกรีนช็อต 2024-05-18 222922.png' alt='Scenic view' class='popup-image'>")
            // .openOn(map);

		// สิ้นสุดป้าย
			// var newMarker = L.marker([13.749329, 100.501728], { draggable : false}).addTo(map);
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
				createMarker: function(i, waypoint, n) {
					// กำหนดรูป Marker แต่ละตำแหน่ง
					var iconUrl = 'bus/bus.png'; // เปลี่ยนเป็น URL ของรูปภาพ Marker ที่ต้องการใช้
					var icon = L.icon({
					  iconUrl: iconUrl,
					  iconSize: [45, 55], // ขนาดของ Marker
					  // iconAnchor: [16, 32], // จุดศูนย์กลางของ Marker ที่ติดตั้งบนแผนที่
					  // popupAnchor: [0, -32] // จุดที่ Popup จะแสดงขึ้นเมื่อคลิกที่ Marker
					});
		
				  
		
				
					return L.marker(waypoint.latLng, {
					  icon: icon,
					  draggable: false, // ปิดการลาก Marker
					  
					});
				  },
				  draggableWaypoints: false,
				  addWaypoints: false,
				  lineOptions: {
						  styles: [{ color: 'green', opacity: 1, weight: 5 }]
					  }

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