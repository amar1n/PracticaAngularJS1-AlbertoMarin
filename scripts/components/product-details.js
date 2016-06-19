/**
 * Created by alberto on 15/6/16.
 */

angular.module("whatapop").component("productDetails", {

    // Con 'template' / 'templateUrl' establecemos la vista del componente.
    templateUrl: "views/product-details.html",

    // En 'controller' establecemos la lógica del componente.
    controller: ["ProductService", "$sce",
        function (ProductService, $sce) {

            var self = this;

            // El hook '$routerOnActivate' del router nos da información sobre
            // la ruta que se está navegando. Entre otros datos, podemos acceder
            // a los parámetros definidos en la ruta.
            self.$routerOnActivate = function (next) {

                // Recuperamos el identificador del producto
                // a partir de los parámetros de la ruta.
                var productId = next.params.id;

                self.myPosition = next.params.myPosition;

                // Recuperamos el producto correspondiente al identificador recuperado.
                ProductService.getProduct(productId).then(function (respuesta) {
                    self.product = respuesta.data;

                    self.productDescription = $sce.trustAsHtml(self.product.description);
                });
            };

            // Obtenemos la ruta absoluta de la imagen.
            self.getImagePath = ProductService.getImageAbsolutePath;

        }]
});