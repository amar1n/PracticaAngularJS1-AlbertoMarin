/**
 * Created by alberto on 19/6/16.
 */

angular.module("whatapop").service("UserService",
    ["$http", "Properties",
        function ($http, Properties) {

            // Obtenemos la colección de usuarios...
            this.getUsers = function () {

                return $http.get(Properties.urlServer + Properties.endpointUser);

            };

        }]
);