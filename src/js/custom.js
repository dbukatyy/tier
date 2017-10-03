jQuery(document).ready(function () {

	$('.recomended .slider__list').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.recomended .slider__left',
		nextArrow: '.recomended .slider__right',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3
              }
            },
             {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
             {
              breakpoint: 600,
              settings: {
                slidesToShow: 1
              }
            }
      ]
	});

	$('.ofnen .slider__list').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.ofnen .slider__left',
		nextArrow: '.ofnen .slider__right',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3
              }
            },
             {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
             {
              breakpoint: 600,
              settings: {
                slidesToShow: 1
              }
            }
        ]
	});

	$('.sale .slider__list').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.sale .slider__left',
		nextArrow: '.sale .slider__right',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3
              }
            },
             {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
             {
              breakpoint: 600,
              settings: {
                slidesToShow: 1
              }
            }
        ]
	});

    $('.hamburger').on('click', () => {
        $('.hamburger, .menu').toggleClass('active');
    })

    AOS.init({
    
      duration: 700
    
    });

     $('.zoo-item').ZooMove();

});


function initMap() {

            // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    var map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 52.1353017, lng: 23.673189},
        zoom: 15,
        styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]
     });

    var marker = new google.maps.Marker({

	    position: {lat: 52.1353017, lng: 23.673189},
	    map: map,
	    title: 'Belshina',
	    icon: '../img/map.png'
	});

}
