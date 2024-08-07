function initMap() {
    // La ubicación de tu negocio (Zúrich, Suiza)
    const ubicacionNegocio = { lat: 47.3769, lng: 8.5417 };

    // Crear el mapa, centrado en la ubicación de tu negocio
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: ubicacionNegocio
    });

    // Marcador para la ubicación de tu negocio
    const marker = new google.maps.Marker({
        position: ubicacionNegocio,
        map: map,
        title: "Ubicación de la Empresa"
    });

    // Intentar obtener la ubicación del cliente
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const ubicacionCliente = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Marcador para la ubicación del cliente
            new google.maps.Marker({
                position: ubicacionCliente,
                map: map,
                title: "Tu ubicación"
            });

            // Trazar la ruta desde el cliente hasta la empresa
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);

            directionsService.route(
                {
                    origin: ubicacionCliente,
                    destination: ubicacionNegocio,
                    travelMode: google.maps.TravelMode.DRIVING
                },
                (response, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        directionsRenderer.setDirections(response);
                    } else {
                        window.alert("Directions request failed due to " + status);
                    }
                }
            );
        });
    } else {
        window.alert("Geolocation is not supported by this browser.");
    }
}

// Asegúrate de que esta función se llame después de que la API de Google Maps haya sido cargada
window.initMap = initMap;
