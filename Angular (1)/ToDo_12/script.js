var app = angular.module("myApp", []);

app.controller("myController", function($scope){

    $scope.tasks = [
        { id: 1, task: "Watching Anime" },
        { id: 2, task: "Watching Movie" }
    ];

    // ADD
    $scope.addTask = function(){
        if(!$scope.taskInput){
            alert("Please enter task");
            return;
        }

        let newTask = {
            id: $scope.tasks.length + 1,
            task: $scope.taskInput
        };

        $scope.tasks.push(newTask);
        $scope.taskInput = "";
    };

    // UPDATE (Fixed)
    $scope.updateTask = function(index){
        let newValue = prompt("Enter updated task", $scope.tasks[index].task);

        if(newValue !== null && newValue !== ""){
            $scope.tasks[index].task = newValue;
        }
    };

    // DELETE
    $scope.deleteTask = function(index){
        $scope.tasks.splice(index, 1);
    };

});