/**
 * Created by Arrieta on 21/11/2017.
 */
'use strict';
angular.module('APP').controller('DashboardController', function($scope, $location, $interval,$http) {
    $scope.reactive=null;
    $scope.labels = [];
    $scope.series = [];
    $scope.data = [];
    $http({
        method: 'GET',
        url: 'http://127.0.0.1:8000/montlyProduction'
    }).then(function(response) { // success
        $scope.reactive=response.data;
        $scope.labels=[months[$scope.reactive.months[4]],months[$scope.reactive.months[3]],
            months[$scope.reactive.months[2]],months[$scope.reactive.months[1]],months[$scope.reactive.months[0]]];
        $scope.series=$scope.reactive.inversor;
        for(var i = 0;i<$scope.reactive.inversor.length;i++){
            $scope.data.push( [$scope.reactive.five[i].production,$scope.reactive.four[i].production,
                $scope.reactive.three[i].production,$scope.reactive.two[i].production,$scope.reactive.one[i].production])
        }
    }, function(error) { //error
        alert("Error: La conexion con el servidor ha fallado.");
    });
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }
            ]
        }
    };
    $scope.donutLabels = [months['01'],months['02'],months['03'],months['04'],months['05'],months['06'],
        months['07'],months['08'],months['09'],months['10'],months['11'],months['12']];
    $scope.donutData = [];
    $http({
        method: 'GET',
        url: 'http://127.0.0.1:8000/weather'
    }).then(function(response) { // success
        var max=[],min=[];
        $.each(response.data,function (index,value) {
           $scope.donutData.push(value.sun_hours);
           max.push(value.max_temperature);
           min.push(value.min_temperature);
        });
        $scope.barData.push(max,min);
    }, function(error) { //error
        alert("Error: La conexion con el servidor ha fallado.");
    });
    //Bar
    $scope.barLabels = $scope.donutLabels;
    $scope.barSeries = ['Max Temperature', 'Min Temperature'];
    $scope.barData = [];

});