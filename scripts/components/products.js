/**
 * Created by alberto on 14/6/16.
 */

angular.module("whatapop").component("products", {

    // Con 'bindings' establecemos la interfaz de comunicación
    // del componente. Solicitamos el enlace de '$router', que
    // lo hace automáticamente AngularJS en el ng-outlet.
    bindings: {
        $router: "<"
    },

    // Con 'template' / 'templateUrl' establecemos la vista del componente.
    templateUrl: "views/products.html",

    // En 'controller' establecemos la lógica del componente.
    controller: ["ProductService", "CategoryService", "MyGeolocalization", "UserService", "MyLocalWebStorage", "Properties",
        function (ProductService, CategoryService, MyGeolocalization, UserService, MyLocalWebStorage, Properties) {

            var self = this;

            // Filtro para buscar productos por nombre.
            self.nameFilter = {name: MyLocalWebStorage.getItem(Properties.filterProductName)};

            // Filtro para buscar productos por categoría.
            self.catFilter = {name: MyLocalWebStorage.getItem(Properties.filterCategory) || "Todas"};

            // Filtro para buscar productos por categoría.
            self.myRange = Number(MyLocalWebStorage.getItem(Properties.filterDistance));

            // Podemos engancharnos al hook '$onInit', que se
            // dispara cuando el componente se inicia.
            self.$onInit = function () {

                MyGeolocalization.getMyPosition().then(
                    function (data) {
                        self.myPosition = data.coords;
                    }
                );

                // Como 'getProducts()' retorna una promesa, tengo que
                // pasar un manejador a su funcion 'then()'.
                ProductService.getProducts().then(function (respuesta) {

                    // En la propiedad 'data' de la respuesta HTTP tenemos el cuerpo de la misma.
                    self.products = respuesta.data;
                });

                // Como 'getCategories()' retorna una promesa, tengo que
                // pasar un manejador a su funcion 'then()'.
                CategoryService.getCategories().then(function (respuesta) {

                    // En la propiedad 'data' de la respuesta HTTP tenemos el cuerpo de la misma.
                    self.categories = respuesta.data;
                    self.categories.splice(0, 0, {id: 0, name: "Todas"});
                });

                // Como 'getUsers()' retorna una promesa, tengo que
                // pasar un manejador a su funcion 'then()'.
                UserService.getUsers().then(function (respuesta) {

                    // En la propiedad 'data' de la respuesta HTTP tenemos el cuerpo de la misma.
                    self.users = respuesta.data;
                });

            };

            // Obtenemos la ruta absoluta de la imagen.
            self.getImagePath = ProductService.getImageAbsolutePath;

            // Navegamos al detalle del producto seleccionado.
            self.productDetailsClicked = function (product) {

                self.$router.navigate(["ProductDetails", {id: product.id}]);

            };

            self.updateFilterProductName = function () {
                MyLocalWebStorage.setItem(Properties.filterProductName, self.nameFilter.name);
            };

            self.updateFilterCategory = function () {
                MyLocalWebStorage.setItem(Properties.filterCategory, self.catFilter.name);
            };

            self.updateFilterDistance = function () {
                MyLocalWebStorage.setItem(Properties.filterDistance, self.myRange);
            }

        }]
});