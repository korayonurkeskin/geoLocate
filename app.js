function initMap() {
    // map options
    var options = {
        zoom:8,
    }
    // new map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // array of markers
    var markers = [
    ];
    
    // loop through markers
    for (let i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    function addMarker(props) {
        // add marker
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map,
            icon: props.iconImage
        });

        // check for custom icon
        if (props.iconImage) {
            marker.setIcon(props.iconImage);
        }

        // check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content:props.content
            });

            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}