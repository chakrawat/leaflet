let mapInitializedsss = false;
function showMaptt() {
	if (mapInitializedsss) return; // If map is already initialized, do nothing
    
    mapInitializedsss= true;
    // แสดงแผนที่
   
    var mapElementp = document.getElementById("map");
        mapElementp.style.display = "block";

		var taxiIcon = L.icon({
			iconUrl: 'bus/image/3-8-Photoroom.png-Photoroom.png',
			iconSize: [130, 100]
		})
        // จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข้ามมศว
		var marker = L.marker([13.745735, 100.562580

                    ], { icon: taxiIcon,
						zIndexOffset: 100
					 }).addTo(map)
					// .bindPopup("<b>3-8(38)</b><br>").openPopup();

		// var popupopposisswu = L.popup({ closeOnClick: false, autoClose: false })
            .setLatLng([13.744471, 100.562416])
            // .setContent("<b>จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข่ามมศว</b><br>เมื่อเดินออกจากมหาวิทยาลัย <br>ป้ายจะอยู่ฝั่งขวามือ <br>เดินข้ามทางม้าลายเผื่อไปฝั่งตรงข้าม<br><img src='image/สกรีนช็อต 2024-05-18 223212.png' alt='Scenic view' class='popup-image'>")
            // .openOn(map);

		// สิ้นสุดป้าย
			// var newMarker = L.marker([13.764381, 100.538509
            //         ], { draggable : false}).addTo(map);

			L.Routing.control({
				waypoints: [
                    // ป้ายระหว่างทาง
					L.latLng(13.745735, 100.562580),
                    L.latLng(13.749374, 100.559209),
                    L.latLng(13.749638, 100.542372),
                    L.latLng(13.753241, 100.541676),
                    L.latLng(13.760690, 100.542431),
                    L.latLng(13.764381, 100.538509)
                    // L.latLng(),
                    // L.latLng()
				],

				createMarker: function(i, waypoint, n) {
                    // กำหนดชื่อสำหรับแต่ละ marker
                    var markerNames = [
                        'มศว',
                        'โรงเรียนเซนต์ดอมินิก,15',
                        'แยกประตูน้ำ,15',
                        'อินทราสแควร์ประตูน้ำ,20',
                        'ตรงข้ามวัดตะพาน,20',
                        'อนุสาวรีย์ชัยสมรภูมิ (เกาะพหลโยธิน),20'
                    ];
				// createMarker: function(i, waypoint, n) {
					// กำหนดรูป Marker แต่ละตำแหน่ง
					var iconUrl = 'bus/bus (4).png'; // เปลี่ยนเป็น URL ของรูปภาพ Marker ที่ต้องการใช้
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
					//   icon: icon,
					//   draggable: false, // ปิดการลาก Marker
					  
				
				},
				draggableWaypoints: false,
				addWaypoints: false,
				lineOptions: {
                styles: [{ color: 'yellow', opacity: 1, weight: 5 }]
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