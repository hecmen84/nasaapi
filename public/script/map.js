var mymap = L.map('mapid').setView([13.704484494232556,-89.21885750347131], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVjbWVuODQiLCJhIjoiY2t1MzFwdHFxNGNldzJ2bzJ2NXU0ZjYyYiJ9.abH9dzMJsf_NrwTQ_k3Grw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);



	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

  mymap.on('click', onMapClick);
  const btEl = document.getElementById('button');
  btEl.addEventListener('click', () => {
    //getIpLocation();
    
  })
  const createMarker = (lat, lng, text)=>{
    L.marker([lat, lng]).addTo(mymap)
    .bindPopup(`<b></b>${text}<br />`).openPopup();
    mymap.panTo(new L.LatLng(lat, lng));
  }

 export { createMarker }


// const getIpLocation = async ()=> {
//   const ip = document.getElementById('ip').value;
//   const elIp = document.querySelector('.ipc');
//   const url = `https://geo.ipify.org/api/v1?apiKey=at_7FgFxGAlC8LUmw7DG2Tb8gPDqDCu6&ipAddress=${ip}`
//   const response =  await fetch(url);
//   const data = await response.json();
  
//   //render(ip, city, timezone, isp);
//   try {
//       if(checkEmpty(ip)){
       
//       elIp.classList.add('error'); 

//       const lat = data.location.lat;
//       const lng = data.location.lng;
//       const timezone = data.location.timezone;
//       const city = data.location.city;
//       const isp = data.isp;
//       createMarker(lat, lng, city);
//       render(ip, city, timezone, isp)
//       } else {        
//         elIp.classList.add('error');
//       }
//   } catch (error) {
//     alert("No se encontró la IP");
//   }
  

// }

// const render = (ip, city, timezone, isp)=>{
//   document.querySelector('.ip').textContent = ip;
//   document.querySelector('.city').textContent = city;
//   document.querySelector('.timezone').textContent = timezone;
//   document.querySelector('.isp').textContent = isp;
  
// }

// const checkEmpty = (ip) => {
//   if(ip.lenght == 0 || ip == ""){
//     return false;
//   } else {
//     return true;
//   }
// }
  