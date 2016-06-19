/**
 * Created by alberto on 17/6/16.
 */

angular.module("whatapop").service("CategoryService",
    ["$http", "Properties",
        function ($http, Properties) {

            // Obtenemos la colección de categorías...
            this.getCategories = function () {

                return $http.get(Properties.urlServer + Properties.endpointCategory);

            };

        }]
);