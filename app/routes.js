import angular, {module} from 'angular';
import uiRouter from 'angular-ui-router';

export function routes($stateProvider){
  $stateProvider
    .state('home', {
      url: '/',
      template: '<sessions></sessions>'
    })
    .state('sessions', {
      url: '/sessions',
      template: '<hl-sessions></hl-sessions>'
    });
}

routes.$inject = ['$stateProvider'];

export default module('hl.routes', [uiRouter]).config(routes).name;
