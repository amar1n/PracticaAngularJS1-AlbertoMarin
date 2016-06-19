/**
 * Created by alberto on 13/6/16.
 */

angular.module("whatapop").service("ProductService",
    ["$http", "Properties",
        function ($http, Properties) {

            // Obtenemos la colección de productos...
            this.getProducts = function () {

                return $http.get(Properties.urlServer + Properties.endpointProduct);

            };

            // Obtenemos el producto correspondiente al identificador indicado.
            this.getProduct = function (productId) {

                return $http.get(Properties.urlServer + Properties.endpointProduct + "/" + productId);

            };

            // Montamos la ruta absoluta a la imagen indicada.
            this.getImageAbsolutePath = function (relativePath) {

                return relativePath
                    ? (Properties.urlServer + "/" + relativePath)
                    : undefined;

            };

        }]
);