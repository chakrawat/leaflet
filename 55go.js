let mapInitializedp = false;
function showMapt() {
	if (mapInitializedp) return; // If map is already initialized, do nothing
    
    mapInitializedp= true;
    // แสดงแผนที่
   
    var mapElementp = document.getElementById("map");
        mapElementp.style.display = "block";
  
  
        
          
		var taxiIcon = L.icon({
			iconUrl: 'bus/image/3-55-Photoroom.png-Photoroom.png',
			iconSize: [130, 100]
		})
        // จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข้ามมศว
		var marker = L.marker([13.745735, 100.562580
                    ], { icon: taxiIcon,zIndexOffset: 100 }).addTo(map)
					// .bindPopup("<b>3-55</b><br>").openPopup();

		var popupopposisswu = L.popup({ closeOnClick: false, autoClose: false })
            .setLatLng([13.744471, 100.562416])
            // .setContent("<b>จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข่ามมศว</b><br>เมื่อเดินออกจากมหาวิทยาลัย <br>ป้ายจะอยู่ฝั่งขวามือ <br>เดินข้ามทางม้าลายเผื่อไปฝั่งตรงข้าม<br><img src='image/สกรีนช็อต 2024-05-18 223212.png' alt='Scenic view' class='popup-image'>")
            // .openOn(map);
						
		// สิ้นสุดป้าย
			// var newMarker = L.marker([13.807173, 100.511883
            //         ], { draggable : false}).addTo(map);

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
				createMarker: function(i, waypoint, n) {
					// กำหนดรูป Marker แต่ละตำแหน่ง
					var iconUrl = 'bus/image/bus (3).png'; // เปลี่ยนเป็น URL ของรูปภาพ Marker ที่ต้องการใช้
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
                styles: [{ color: 'blue', opacity: 1, weight: 5 }]
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
