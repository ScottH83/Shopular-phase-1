angular.module('store').service('allProducts', getStoreServices);

function getStoreServices($http) {
    function getAllProducts() {
        return $http({
            method: 'GET',
            url: './src/data/inventory.json'
        });
    }
    return {
        get: getAllProducts
    };
}
