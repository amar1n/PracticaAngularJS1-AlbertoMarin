/**
 * Created by alberto on 19/6/16.
 */

angular.module("whatapop").service("MyLocalWebStorage",
    function (Properties) {

        this.setItem = function (itemName, productName) {
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem(itemName, productName);
            }
        };

        this.getItem = function (itemName) {
            if (typeof(Storage) !== "undefined") {
                return localStorage.getItem(itemName);
            }
        };

    }
);