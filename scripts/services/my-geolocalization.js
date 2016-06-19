/**
 * Created by alberto on 18/6/16.
 */

angular.module("whatapop").service("MyGeolocalization",
    ["$q",
        function ($q) {

            // Obtenemos la posición del usuario resolviendo una promesa
            this.getMyPosition = function () {

                var deferred = $q.defer();

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        function (datos) {
                            deferred.resolve({"coords": datos.coords});
                        },
                        function () {
                            deferred.reject("¡El usuario no autorizó!");
                        }
                    );
                } else {
                    deferred.reject("El navegador no soporta geolocalización");
                }

                return deferred.promise;

            };

        }]
);
