"use strict";
(function(){
    angular
    .module("Example")
    .controller("exampleController", exampleController);
    
    function exampleController($http, exampleService, $scope){
                
//        function renderExamples(){
//            exampleService.readAllExamples(function(response){
//                $scope.examples=response;
//            });              
//        }
        
        exampleService.readAllExamples(renderExamples);
        function renderExamples(response){
            $scope.examples=response;
        }
            
        $scope.createExample=createExample;
        function createExample(example){
            //the argument is (input1, input2, ......, callback)
            exampleService.createExample(example,renderExamples);
        }        
        
        $scope.selectExample=selectExample;
        function selectExample(index){
            $scope.selectedIndex=index;
            exampleService.readExampleById(index, function(response){
                $scope.example=response;
            });
        }
        
        $scope.updateExample=updateExample;
        function updateExample(example){
            exampleService.updateExample($scope.selectedIndex, example,renderExamples);
        }
        
        $scope.removeExample=removeExample;
        function removeExample(id){
            exampleService.deleteExample(id,renderExamples);
        }
        
        
    }
    
    
})()