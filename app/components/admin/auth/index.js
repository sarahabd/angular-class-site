import angular from 'angular';
import {AuthComponent} from './auth.component';
import {Auth, AuthInterceptor} from './auth.service';
import uiRouter from 'angular-ui-router';

function config($stateProvider, $httpProvider){
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<ac-auth></ac-auth>'
    });

  $httpProvider.interceptors.push('AuthIntercptor');
}

config.$inject = ['$stateProvider', '$httpProvider'];

export default angular.module('auth', [
  'ui.router'
])
  .config(config)
  .factory('Auth', Auth)
  .factory('AuthIntercptor', AuthInterceptor)
  .directive('acAuth', AuthComponent);
