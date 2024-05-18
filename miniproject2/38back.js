function showMapttpss() {
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
            var newMarker = L.marker([13.671030, 100.687221], { draggable : false}).addTo(map);
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