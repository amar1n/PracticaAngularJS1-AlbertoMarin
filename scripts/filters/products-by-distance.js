/**
 * Created by alberto on 19/6/16.
 */

angular.module("whatapop").filter('ProductsByDistance', ["$haversine", function ($haversine) {
    return function (products, distance, myPosition, users) {
        // Nos aseguramos que los productos sean sí o sí una colección.
        products = products || [];

        // Nos aseguramos que nos informan de una distancia.
        if (!distance) {
            return products;
        }

        if (!myPosition) {
            return products;
        }

        // Nos aseguramos que los usuarios sean sí o sí una colección.
        users = users || [];

        return products.filter(function (product) {

            // 1) Obtener el vendedor de product
            var seller = users.filter(function (user) {
                return product.seller.id === user.id;
            });

            if (!seller) return false;

            // 2) Calcular la distancia de vendedor con respecto a myPosition
            var sellerCoords = {
                "latitude": seller[0].latitude,
                "longitude": seller[0].longitude
            };
            var sellerDistance = $haversine.distance(myPosition, sellerCoords) || 1000000000;
            
            return sellerDistance <= distance;
        });
    }
}]);