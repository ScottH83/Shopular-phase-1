(function() {
    "use strict";


    const app = angular.module('store', []);

    app.controller('StoreController', function(allProducts, $q) {
        console.log('in');
        this.products = {};
        this.tax = 0.0575;
        $q.when(allProducts.get('./src/data/inventory.json')).then((response) => {
            this.products = response.data;
            console.log(response.data);

        }).catch((error) => {
            console.log(error);
        });
        this.getNewPrice = function(price, discount) {
            let totalPrice = (price - discount);
            let newPrice = totalPrice * this.tax;
            totalPrice += newPrice;
            return newPrice.toFixed(2);
        };
        this.discountPrice = function(discount) {
            if (discount > 0) {
                return true;
            } else {
                return false;
            }
        };

    });


})();

// let storeProduct = [{
//     name: 'widget',
//     price: 32,
//     quantity: 203,
//     color: 'red',
//     discount: '31',
//     soldOut: 'true',
//     tax: 5.75
// }];
// let inventoryItems = [{
//     name: 'widget',
//     price: 32,
//     quantity: 203,
//     color: 'red',
//     discount: '31',
//     soldOut: 'true'
// }, ];
