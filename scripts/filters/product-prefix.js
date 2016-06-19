/**
 * Created by alberto on 16/6/16.
 */

angular.module("whatapop").filter('ProductPrefix', function () {
    return function (text, category) {

        var prefix = "";
        switch (category.id) {
            case 1:
                prefix = "Videojuego: ";
                break;
            case 2:
                prefix = "Película: ";
                break;
            case 3:
                prefix = "Libro: ";
                break;
        }
        return prefix + text;
    }
});