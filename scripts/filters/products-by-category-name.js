/**
 * Created by alberto on 17/6/16.
 */

angular.module("whatapop").filter('ProductsByCategoryName', function () {
    return function (products, category) {

        if (category.name === "Todas") return products;

        // Nos aseguramos que los productos sean sí o sí una colección.
        products = products || [];

        // Buscamos aquellos productos cuya categoría sea igual a la indicada.
        return products.filter(function (product) {
            return product.category.name === category.name;
        });
    }
});