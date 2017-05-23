$(document).ready(function(){

	var myLatLng = new google.maps.LatLng(6.465422,3.406448);
	var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
        //  scrollwheel: false,
          zoom: 12
        });
	function createMarker(latlng,icn,name){
		var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		icon: icn,
		title: name
	});
	}

	
	var request = {
    location: myLatLng,
    radius: '2500',
    types: ['store']
    //You can replce store with school, users, people, etc
  };


	service = new google.maps.places.PlacesService(map);
	service.nearbySearch(request, callback);

	function callback(results, status) {
	//	console.log(results);
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      console.log(place);
      latlng = place.geometry.location;
      icn = place.icon; 
      //<!--The icon in line can be replaced using a link e.g icn = http://markeer.png -->
      name = place.name;
      createMarker(latlng,icn,name);
    }
  } 
}

});