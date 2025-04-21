export const routes = ($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider
      .when('/products', {
        templateUrl: 'product/product.list.html',
        controller: 'ProductController',
        controllerAs: 'vm'
      })
      .when('/products/add', {
        templateUrl: 'product/product.add.html',
        controller: 'ProductController',
        controllerAs: 'vm'
      })
      .when('/products/edit/:id', {
        templateUrl: 'product/product.edit.html',
        controller: 'ProductController',
        controllerAs: 'vm'
      })
      .otherwise({ redirectTo: '/products' });
  };
  routes.$inject = ['$routeProvider'];
  