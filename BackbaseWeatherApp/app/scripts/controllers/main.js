'use strict';

/**
 * @ngdoc function
 * @name backbaseWeatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the backbaseWeatherAppApp
 */
angular.module('backbaseWeatherAppApp')
  .controller('MainCtrl', function ($scope, weatherAPIservices) {
  	//add factory to controller for it's use, as well as $scope for access to variables
  	//controller should be "dumb" and not contain things related to specific data

    	//when there's a change in input for city ng-model, utilize factory to call to API for data
    	$scope.changeCity = function() {
    		$scope.isLoading = true; //loading variable, there's probably a better way to do this
		weatherAPIservices.getCurrentWeather($scope.city)
			.then(function(response) {
				$scope.currWeather = response.data;
				$scope.isLoading = false;
				// console.log(response.data);
			}, function(error) {
				$scope.error = true;
				$scope.isLoading = false;
				$scope.status = 'Unable to get current weather data ' + error.message;
		});

		weatherAPIservices.getNextHoursWeather($scope.city)
			.then(function(response) {
				$scope.nextWeather = response.data;
				$scope.isLoading = false;
				// console.log(response.data); //used to see what's available easily in console
			}, function(error) {
				$scope.error = true;
				$scope.isLoading = false;
				$scope.status = 'Unable to get next 5 hours weather data ' + error.message;
		});

	};
  });

// Normally I'd put the factory outside of the controller, in it's own file
// and have a folder directory on the same level as controllers and services, etc. 
// but didn't now due to time and to support efficient workflow in small file size

// I created a factory to hold and manage data from the API calls. 
// It's best to abstract out data specific functionality like this so that multiple controllers (if there are any)
// can utilize data. Factories and Services are singletons so that helps them be used
// in multiple controllers as well

// I used a Factory instead of a service because the Factory can return an object literal that has the data
// Whereas a Service returns itself as the object because it's a constructor function

angular.module('backbaseWeatherAppApp')
	.factory('weatherAPIservices', function($http) {
		var weatherData = {}; //instantiate object to hold weather data
		var currWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q='; //enter city name after =
		var nextHoursURL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
		var units = '&units=imperial';
		var apiKeyURL = '&APPID=8cea6b26f9dc6689b916fcc59eceb964'; //end URL with key

		$http.defaults.useXDomain = true;//allow outside calls

		weatherData.getCurrentWeather = function(city) {
			return $http.get(currWeatherURL + city + units + apiKeyURL);
		};

		weatherData.getNextHoursWeather = function(city) {
			return $http.get(nextHoursURL + city + units + apiKeyURL);
		};

		return weatherData; //return full weather data obj
});



