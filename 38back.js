let mapInitializedss = false;
function showMapttpss() {
    
    if (mapInitializedss) return; // If map is already initialized, do nothing
    
    mapInitializedss= true;
    // แสดงแผนที่
   
    var mapElementp = document.getElementById("map");
        mapElementp.style.display = "block";
        var taxiIcon = L.icon({
            iconUrl: 'bus/image/3-8-Photoroom.png-Photoroom.png',
            iconSize: [130, 100]
        })
        // จุดเริ่มขึ้นรถเมล์ ฝั่งมศว
        // var marker = L.marker([13.744471, 100.562416], { icon: taxiIcon }).addTo(map);
        var marker = L.marker([13.744471, 100.562416], {
            icon: taxiIcon,
            zIndexOffset: 100
        }).addTo(map);
        
            

        var popupswu = L.popup({ closeOnClick: false, autoClose: false })
        .setLatLng([13.744471, 100.562416])
        // .setContent("<b>จุดเริ่มขึ้นรถเมล์ ฝั่งมศว</b><br>เมื่อเดินออกจากมหาวิทยาลัย <br>ป้ายจะอยู่ฝั่งซ้ายมือ <br>เดินถัดไปจากตลาดสุขตา<br><img src='image/สกรีนช็อต 2024-05-18 222922.png' alt='Scenic view' class='popup-image'>")
        // .openOn(map);

        // สิ้นสุดป้าย
            // var newMarker = L.marker([13.671030, 100.687221], { draggable : false}).addTo(map);
            
            L.Routing.control({
                waypoints: [
                    // ป้ายระหว่างทาง
                    L.latLng(13.744471, 100.562416),
                    L.latLng(13.739711, 100.561905),
                    L.latLng(13.732827, 100.566558),
                    L.latLng(13.721041, 100.583224),
                    L.latLng(13.712202, 100.595574),
                    L.latLng(13.680094, 100.609708),
                    L.latLng(13.6682434,100.6344665),
                    L.latLng(13.654246, 100.675021),
                    L.latLng(13.671030, 100.687221)                
                    // L.latLng(),                 
                    // L.latLng()
                ],

                createMarker: function(i, waypoint, n) {
                    // กำหนดชื่อสำหรับแต่ละ marker
                    var markerNames = [
                        'มศว',
                        'อาคารชิโน-ไทย,15บาท',
                        'ตรงข้ามเอ็มสเฟียร์,15บาท',
                        'เมเจอร์เอกมัย,15บาท',
                        'ตลาดพระโขนง,20บาท',
                        'BTS อุดมสุข (ทางออก 5),20บาท',
                        'เซ็นทรัลบางนา,20บาท',
                        'ตรงข้ามบางแก้ว,25บาท',
                        'อู่ไทยสมายล์บัส รามคำแหง 2,25บาท'
                    ];
            
                    var iconUrl = 'bus/bus (4).png'; // เปลี่ยนเป็น URL ของรูปภาพ Marker ที่ต้องการใช้
                    var icon = L.icon({
                        iconUrl: iconUrl,
                        iconSize: [45, 55] // ขนาดของ Marker
                    });
            
                    var marker = L.marker(waypoint.latLng, {
                        icon: icon,
                        draggable: false // ปิดการลาก Marker
                    });
            
                    marker.bindPopup(markerNames[i]); // เพิ่ม popup ที่มีชื่อของ marker
                    return marker;
                // createMarker: function(i, waypoint, n) {
				// 	// กำหนดรูป Marker แต่ละตำแหน่ง
				// 	var iconUrl = 'bus/bus (4).png'; // เปลี่ยนเป็น URL ของรูปภาพ Marker ที่ต้องการใช้
				// 	var icon = L.icon({
				// 	  iconUrl: iconUrl,
				// 	  iconSize: [45, 55], // ขนาดของ Marker
				// 	  // iconAnchor: [16, 32], // จุดศูนย์กลางของ Marker ที่ติดตั้งบนแผนที่
				// 	  // popupAnchor: [0, -32] // จุดที่ Popup จะแสดงขึ้นเมื่อคลิกที่ Marker
				// 	});
		
				  
		
				
				// 	return L.marker(waypoint.latLng, {
				// 	  icon: icon,
				// 	  draggable: false, // ปิดการลาก Marker
					  
				// 	});
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