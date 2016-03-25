var app = angular.module('starter.services', []);

app.service('Quest', function() {
  var self = {

  };
  return self;
});

app.factory('Tours', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tours =
    {
      "cities": [
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
        },
        {
          "countryId": 239,
          "id": 6,
          "latitude": 61.16052,
          "longitude": -45.42598,
          "name": "Narssarssuaq"
        },
        {
          "countryId": 239,
          "id": 7,
          "latitude": 64.190926,
          "longitude": -51.678062,
          "name": "Godthaab"
        },
        {
          "countryId": 239,
          "id": 8,
          "latitude": 67.01697,
          "longitude": -50.689323,
          "name": "Sondrestrom"
        },
        {
          "countryId": 239,
          "id": 9,
          "latitude": 76.531204,
          "longitude": -68.70316,
          "name": "Thule"
        },
        {
          "countryId": 66,
          "id": 10,
          "latitude": 65.659996,
          "longitude": -18.072702,
          "name": "Akureyri"
        },
        {
          "countryId": 66,
          "id": 11,
          "latitude": 65.28333,
          "longitude": -14.401389,
          "name": "Egilsstadir"
        },
        {
          "countryId": 66,
          "id": 12,
          "latitude": 64.295555,
          "longitude": -15.227222,
          "name": "Hofn"
        }
      ],
      "countries": [
        {
          "id": 0,
          "name": "Papua New Guinea"
        },
        {
          "id": 1,
          "name": "Cambodia"
        },
        {
          "id": 2,
          "name": "Paraguay"
        },
        {
          "id": 3,
          "name": "Kazakhstan"
        },
        {
          "id": 4,
          "name": "Syria"
        },
        {
          "id": 5,
          "name": "Bahamas"
        },
        {
          "id": 6,
          "name": "Solomon Islands"
        },
        {
          "id": 7,
          "name": "Montserrat"
        },
        {
          "id": 8,
          "name": "Mali"
        },
        {
          "id": 9,
          "name": "Marshall Islands"
        },
        {
          "id": 10,
          "name": "Panama"
        },
        {
          "id": 11,
          "name": "Guadeloupe"
        },
        {
          "id": 12,
          "name": "Laos"
        },
        {
          "id": 13,
          "name": "Argentina"
        },
        {
          "id": 14,
          "name": "Falkland Islands"
        },
        {
          "id": 15,
          "name": "Virgin Islands"
        },
        {
          "id": 16,
          "name": "Seychelles"
        },
        {
          "id": 17,
          "name": "Zambia"
        },
        {
          "id": 18,
          "name": "Belize"
        },
        {
          "id": 19,
          "name": "Bahrain"
        }
      ]
    };

  return {
    all: function() {
      return tours.cities;
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
      var result = [];
      var arr1 = [];
      var arr2 = [];
      arr1 = this.city_search(query_string.toLowerCase());
      arr2 = this.country_search(query_string.toLowerCase());
      if (arr1.length != 0) {result = result.concat(arr1)}
      if (arr2.length != 0) {result = result.concat(arr2)}
      console.log(result);
      return result;
    },
    country_search: function(query_string) {
      var arr = [];
      //debugger;
      for (var i = tours["countries"].length - 1; i >= 0; i--) {
        if (tours["countries"][i]["name"].toLowerCase() == query_string) {
         // debugger;
          var id = tours["countries"][i]["id"];
          for (var i = tours["cities"].length - 1; i >= 0; i--) {
            if (tours["cities"][i]["countryId"] == id) {
           //    debugger;
              arr.push(tours["cities"][i]["name"]);
            }
          }
        // arr.push(this.foo["countries"][i]);
        }
      }
       return arr;
    },
    city_search: function(query_string) {
      var arr = [];
      for (var i = tours["cities"].length - 1; i >= 0; i--) {
        if (tours["cities"][i]["name"].toLowerCase() == query_string) {
          arr.push(tours["cities"][i]);
        }
      }
      for (var i = tours["cities"].length - 1; i >= 0; i--) {
        if (tours["cities"][i]["name"].toLowerCase().indexOf(query_string) == 0) {
          arr.push(tours["cities"][i]);
        }
      }
      return arr;
    }
  };
});
