function mapStyle2() {
    //style maps
    var map_template = [{
        "stylers": [{
            "saturation": -100
        }, {
            "gamma": 0.8
        }, {
            "lightness": 4
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "landscape.natural",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#5dff00"
        }, {
            "gamma": 4.97
        }, {
            "lightness": -5
        }, {
            "saturation": 100
        }]
    }];
    //map in main
    var mapMain;
    //location for mainmap
    var myCenterMain = new google.maps.LatLng(13.880069, 100.549827);
    var markerMain = new google.maps.Marker({
        position: myCenterMain,
        icon: '../image/marker.png', // null = default icon
    });
    // create the main map
    var mapPropMain = {
        center: myCenterMain,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        draggable: true,
        scrollwheel: true,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        // Apply the map style array to the map.
        styles: map_template,
    };
    //get mapMain
    mapMain = new google.maps.Map(document.getElementById('mapInMain'), mapPropMain);
    markerMain.setMap(mapMain);
};
