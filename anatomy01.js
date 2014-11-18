<!doctype html>
<html ng-app>
<head>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js"></script>
</head>
<body>
    <form ng-controller="StartUpController">
        Starting: <input ng-change="computeNeeded()" ng-model="funding.startingEstimate">
        Recommendation: <p ng-bind='funding.needed'></p>
        <button ng-click="requestFunding()">Get Funds</button>
        <button ng-click="reset()">Reset</button>
    </form>
    <script>
        function StartUpController($scope) {
            $scope.funding = { startingEstimate: 0 };
            $scope.computeNeeded = function () {
                $scope.funding.needed = $scope.funding.startingEstimate * 10;
            };
            $scope.requestFunding = function () {
                window.alert("More customers required!");
            };
            $scope.reset = function () {
                $scope.funding.startingEstimate = 0;
                $scope.funding.needed = 0;
            };
        }
    </script>
</body>
</html>
