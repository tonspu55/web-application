function mapStyle3() {
    //style maps
    var map_template = [{
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#444444"
        }]
    }, {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "off"
        }, {
            "color": "#835555"
        }]
    }, {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [{
            "weight": "0.01"
        }, {
            "hue": "#63ff00"
        }, {
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.province",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.province",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.locality",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "color": "#f2f2f2"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#71c00c"
        }, {
            "weight": "0.62"
        }, {
            "lightness": "53"
        }, {
            "saturation": "-46"
        }]
    }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#c5ccc2"
        }]
    }, {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
            "color": "#078524"
        }, {
            "lightness": "70"
        }, {
            "saturation": "-30"
        }]
    }, {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "off"
        }, {
            "color": "#22e808"
        }]
    }, {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#13a388"
        }]
    }, {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#07bf2a"
        }]
    }, {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#15a203"
        }]
    }, {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#d52121"
        }, {
            "visibility": "off"
        }]
    }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.attraction",
        "elementType": "geometry",
        "stylers": [{
            "color": "#bf4b4b"
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
        }, {
            "lightness": 45
        }, {
            "color": "#f88317"
        }, {
            "weight": "0.01"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#f69f25"
        }, {
            "weight": "3.57"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "on"
        }, {
            "weight": "0.1"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#9c19e9"
        }, {
            "visibility": "on"
        }, {
            "saturation": "70"
        }, {
            "lightness": "-15"
        }, {
            "weight": "1.20"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "simplified"
        }, {
            "color": "#f29e16"
        }, {
            "weight": "0.5"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#f89f22"
        }, {
            "weight": "0.70"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#fca731"
        }, {
            "weight": "0.90"
        }]
    }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit.station.rail",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#469bec"
        }, {
            "visibility": "on"
        }, {
            "weight": "3.85"
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
