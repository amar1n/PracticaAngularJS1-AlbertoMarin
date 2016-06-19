/**
 * Created by alberto on 14/6/16.
 */

angular.module("whatapop").component("root", {

    $routeConfig: [
        {
            name: "Products",
            path: "/products",
            component: "products",
            useAsDefault: true
        },
        {
            name: "ProductDetails",
            path: "/product-details",
            component: "productDetails"
        }],

    templateUrl: "views/root.html"

});