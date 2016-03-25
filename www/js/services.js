angular.module('starter.services', [])

.factory('Tours', function() {
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
    },
    search: function(query_string) {
    //var arr = []
      var result = []
      var arr1 = []
      var arr2 = []
      arr1 = this.city_search(query_string.toLowerCase());
      arr2 = this.country_search(query_string.toLowerCase());
      if (arr1.length != 0) {result = result.concat(arr1)};
      if (arr2.length != 0) {result = result.concat(arr2)};
      return result;
    },
    country_search: function(query_string) {
      var arr = []
      //debugger;
      for (var i = this.foo["countries"].length - 1; i >= 0; i--) {
        if (this.foo["countries"][i]["name"].toLowerCase() == query_string) {
         // debugger;
          var id = this.foo["countries"][i]["id"];
          for (var i = this.foo["cities"].length - 1; i >= 0; i--) {
            if (this.foo["cities"][i]["countryId"] == id) {
           //    debugger;
              arr.push(this.foo["cities"][i]["name"]);
            }
          };
        // arr.push(this.foo["countries"][i]);
        }
      };
       return arr;
    },
    city_search: function(query_string) {
      var arr = []
      for (var i = this.foo["cities"].length - 1; i >= 0; i--) {
        if (this.foo["cities"][i]["name"].toLowerCase() == query_string) {
          arr.push(this.foo["cities"][i]);
        }
      };
      for (var i = this.foo["cities"].length - 1; i >= 0; i--) {
        if (this.foo["cities"][i]["name"].toLowerCase().indexOf(query_string) == 0) {
          arr.push(this.foo["cities"][i]);
        }
      };
      return arr;
    }
  };
});
