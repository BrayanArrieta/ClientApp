var months={
    '01':'January', '02':'February', '03':'March', '04':'April', '05':'May',
    '06':'June','07':'July','08':'August','09':'September','10':'October','11':'November','12':'December',
};

(function(){
    angular.module('APP',['ui.router','chart.js'])
        .config(function($stateProvider, $urlRouterProvider){


            $stateProvider.state('Dashboard',{
                url:'/Dashboard',
                controller:'DashboardController',
                templateUrl:'core/dashboard/dashboardView.html'
            });
            $urlRouterProvider.otherwise('/Dashboard');
        });
}());