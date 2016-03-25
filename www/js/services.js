var app = angular.module('starter.services', []);

app.service('Quest', function() {
  var self = {
    activity: '',
    children: null
  };
  return self;
});

app.factory('Tours', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tours = [
    {
      "countryId": 0,
      "id": 0,
      "latitude": -6.081689,
      "longitude": 145.39188,
      "name": "Goroka"
    },
    {
      "countryId": 0,
      "id": 1,
      "latitude": -5.207083,
      "longitude": 145.7887,
      "name": "Madang"
    },
    {
      "countryId": 0,
      "id": 2,
      "latitude": -5.826789,
      "longitude": 144.29587,
      "name": "Mount Hagen"
    },
    {
      "countryId": 0,
      "id": 3,
      "latitude": -6.569828,
      "longitude": 146.72624,
      "name": "Nadzab"
    },
    {
      "countryId": 0,
      "id": 4,
      "latitude": -9.443383,
      "longitude": 147.22005,
      "name": "Port Moresby"
    },
    {
      "countryId": 0,
      "id": 5,
      "latitude": -3.583828,
      "longitude": 143.66919,
      "name": "Wewak"
    }];

  return {
    all: function() {
      return tours;
    },
    remove: function(tour) {
      tours.splice(tours.indexOf(tour), 1);
    },
    get: function(id) {
      for (var i = 0; i < tours.length; i++) {
        if (tours[i].id === parseInt(id)) {
          return tours[i];
        }
      }
      return null;
    }
  };
});
