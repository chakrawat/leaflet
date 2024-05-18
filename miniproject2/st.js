 // create map
 var map = L.map('map').setView([13.745735, 100.562580], 14) 

   
 //  basedmap2
      var OpenStreetMap_France = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
     maxZoom: 20,
     attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // var baseLayers ={
      //   'OSM' : OpenStreetMap_France}

        
    
    // L.control.layers(baseLayers).addTo(map);
    
//      // basedmap3
//      var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//          maxZoom: 19,
//          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
//      }).addTo(map);
//      // create Layer
//      var baseLayers ={
//          'OSM' : OSM,
//          'penStreetMap_France' :OpenStreetMap_France,
//          'OpenStreetMap_HOT ': OpenStreetMap_HOT        
//      }
//      L.control.layers(baseLayers).addTo(map);

    //  var point = L.marker([13.744013721603636, 100.56610673954518],
    //      {
    //      draggable: false, // Make the icon dragable
    //      title: 'SWU', // Add a title
    //      opacity: 1.5 // Adjust the opacity
    //      } 
    //      ).addTo(map);

// onclick

var acc = document.getElementsByClassName("accordion");
var i;

  for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // เช็คว่ากล่องเดิมมีคลาส "active" หรือไม่
    var isActive = this.classList.contains("active");
    
    // ปิดกล่องเดิมหากมีคลาส "active"
    var activeAccordions = document.querySelectorAll(".accordion.active");
    activeAccordions.forEach(function(acc) {
      acc.classList.remove("active");
      acc.nextElementSibling.style.maxHeight = null;
    });

    // เปิดหรือปิดกล่องที่ถูกคลิก
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (!isActive) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      panel.style.maxHeight = null;
    }
  });
}

// map on click
	
// 53 go 
    function showMap() {
      // แสดงแผนที่
      var mapElement = document.getElementById("map");
      mapElement.style.display = "block";
     
   var taxiIcon = L.icon({
			iconUrl: 'https://cdn-icons-png.flaticon.com/128/1023/1023464.png',
			iconSize: [70, 70]
		})
        // จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข้ามมศว
		var marker = L.marker([13.745735, 100.562580

                    ], { icon: taxiIcon }).addTo(map);

		// สิ้นสุดป้าย
			var newMarker = L.marker([13.7370886,100.6415429
                    ], { draggable : false}).addTo(map);

			L.Routing.control({
				waypoints: [
                    // ป้ายระหว่างทาง
					L.latLng(13.745735, 100.562580),                   
                    L.latLng(13.744782, 100.585211),
                    L.latLng(13.744312, 100.602269),
                    L.latLng(13.754578, 100.612504),
                    L.latLng(13.752728, 100.618754),
                    L.latLng(13.755564, 100.627647),
                    L.latLng(13.752379, 100.639963),
                    L.latLng(13.747958, 100.644239),
                    L.latLng(13.7370886,100.6415429),
                    // L.latLng(),
                    // L.latLng(),
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



    // แถบเลื่อน มือถือ
 


  const busInfo = document.querySelector('.bus-info');
  const handle = document.querySelector('.handle');
  
  let isDragging = false;
  let startY, startHeight;
  
  const onMouseMove = (e) => {
    if (!isDragging) return;
    const dy = e.clientY - startY;
    const newHeight = startHeight - dy;
    busInfo.style.height = `${newHeight}px`;
  };
  
  const onMouseUp = () => {
    isDragging = false;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };
  
  const onMouseDown = (e) => {
    isDragging = true;
    startY = e.clientY;
    startHeight = busInfo.getBoundingClientRect().height;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };
  
  handle.addEventListener('mousedown', onMouseDown);
  
  // For touch devices
  const onTouchMove = (e) => {
    if (!isDragging) return;
    const dy = e.touches[0].clientY - startY;
    const newHeight = startHeight - dy;
    busInfo.style.height = `${newHeight}px`;
  };
  
  const onTouchEnd = () => {
    isDragging = false;
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onTouchEnd);
  };
  
  const onTouchStart = (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
    startHeight = busInfo.getBoundingClientRect().height;
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
  };
  
  handle.addEventListener('touchstart', onTouchStart);