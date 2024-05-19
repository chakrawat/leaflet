
let mapInitialized = false;

function showMapttt() {
    if (mapInitialized) return; // If map is already initialized, do nothing
    
    mapInitialized = true; // Mark map as initialized

    // แสดงแผนที่
    var mapElementp = document.getElementById("map");
    mapElementp.style.display = "block";


    var taxiIcon = L.icon({
        // iconUrl: '185-Photoroom.png-Photoroom.png',
        iconUrl: 'bus/image/185-Photoroom.png-Photoroom.png',
        iconSize: [130, 100]
    })
    // จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข้ามมศว
    var marker = L.marker([13.745735, 100.562580
                ], { icon: taxiIcon,zIndexOffset: 100 }).addTo(map)
                // .bindPopup("<b>185</b><br>").openPopup();

                var popupopposisswu = L.popup({ closeOnClick: false, autoClose: false })
        .setLatLng([13.744471, 100.562416])
        // .setContent("<b>จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข่ามมศว</b><br>เมื่อเดินออกจากมหาวิทยาลัย <br>ป้ายจะอยู่ฝั่งขวามือ <br>เดินข้ามทางม้าลายเผื่อไปฝั่งตรงข้าม<br><img src='image/สกรีนช็อต 2024-05-18 223212.png' alt='Scenic view' class='popup-image'>")
        // .openOn(map);

    // สิ้นสุดป้าย
        // var newMarker = L.marker([13.984582, 100.604249
        //         ], { draggable : false}).addTo(map);

        L.Routing.control({
            waypoints: [
                // ป้ายระหว่างทาง
                L.latLng(13.745735, 100.562580),
                L.latLng(13.7580019,100.5650984),
                L.latLng(13.797399, 100.574385),
                L.latLng(13.814942, 100.575262),
                L.latLng(13.830848, 100.570253),
                L.latLng(13.8415336,100.5763083),
                L.latLng(13.8957075,100.6085103),
                L.latLng(13.984582, 100.604249)
            ],

            createMarker: function(i, waypoint, n) {
                // กำหนดชื่อสำหรับแต่ละ marker
                var markerNames = [
                    'มศว',
                    'ฟอร์จูนทาวน์,8บาท',
                    'ตรงข้ามเอ็มสเฟียร์,15บาท',
                    'เอสพลานาด รัชดาภิเษก,8บาท',
                    'ศาลแขวงพระนครเหนือ,8บาท',
                    'ม.เกษตรศาสตร์ (ประตูพหลโยธิน),8บาท',
                    'ตลาดยิ่งเจริญ,8บาท',
                    'อู่รังสิต,8บาท',
                   
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
            })

        }).addTo(map);
}
