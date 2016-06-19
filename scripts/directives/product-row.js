/**
 * Created by alberto on 15/6/16.
 */

angular.module("whatapop").directive("productRow", ["ProductService", function (ProductService) {
    return {

        // Con 'restrict' indicamos cómo vamos a usar la directiva.
        // Con 'A' la usamos como atributo de un elemento HTML.
        // Con 'E' la usamos como elemento HTML.
        restrict: "EA",

        // Con 'template' o 'templateUrl' indicamos la jerarquía de
        // componentesque el navegador va a renderizar como vista
        // de la directiva.
        templateUrl: "views/product-row.html",

        // Con 'scope' definimos la interfaz de comunicación entre la
        // directiva y el scope padre (controlador / componentes).
        scope: {
            prod: "<",
            onProductDetailsClick: "&"
        },

        // Con 'link' establecemos la lógica de la directiva y además
        // podemos hacer manipulación del DOM de la vista.
        link: function (scope) {

            // Manejador del link 'Details'.
            scope.notifyClick = function () {

                // Notificamos al scope padre.
                scope.onProductDetailsClick({product: scope.prod});
            };

            // Obtenemos la ruta absoluta de la imagen.
            scope.getImagePath = ProductService.getImageAbsolutePath;

        }

    }
}]);