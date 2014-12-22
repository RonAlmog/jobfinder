angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [{
            title: 'Sales Person',
            description: 'you will fight dragons'
        }, {
            title: 'accountant',
            description: 'you will use the keyboard'
        }, {
            title: 'Fire fighter',
            description: 'you will put down fires'
        }, {
            title: 'Node programmer',
            description: 'you will live forever'
        }

    ];
});