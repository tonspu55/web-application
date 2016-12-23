    //style maps
    var map_template = [{
        "stylers": [{
            "hue": "#ff1a00"
        }, {
            "invert_lightness": true
        }, {
            "saturation": -100
        }, {
            "lightness": 33
        }, {
            "gamma": 0.5
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#2D333C"
        }]
    }];
    //map in main & modal
    var mapMain, mapModal;
    //map
    function initialize() {
        //location for mainmap
        var myCenterMain = new google.maps.LatLng(13.880069, 100.549827);
        var markerMain = new google.maps.Marker({
            position: myCenterMain,
            icon: '../image/marker.png', // null = default icon
        });
        //location for modalmap
        var myCenterModal = new google.maps.LatLng(13.880069, 100.549827);
        var markerModal = new google.maps.Marker({
            position: myCenterModal,
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
        // create the modal map
        var mapPropModal = {
            center: myCenterModal,
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
        //get mapModal
        mapModal = new google.maps.Map(document.getElementById('mapInModal'), mapPropModal);
        markerModal.setMap(mapModal);

    };

    function resizeMap() {
        if (typeof mapModal == "undefined") return;
        setTimeout(function() {
            resizingMap();
        }, 200);
    };

    function resizingMap() {
        if (typeof mapModal == "undefined") return;
        var center = mapModal.getCenter();
        google.maps.event.trigger(mapModal, "resize");
        mapModal.setCenter(center);
    };
