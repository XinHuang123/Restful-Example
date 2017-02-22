"use strict";
(function(){
    angular
    .module("Example")
    .factory("exampleService", exampleService);
    
    function exampleService($http){
        var service={				
				readAllExamples: readAllExamples,
                readExampleById: readExampleById,
                createExample: createExample,
                updateExample: updateExample,
                deleteExample: deleteExample,
                
			};
			return service;        
        
        function readAllExamples(callback){
            $http
                .get("/rest/example")
                .success(callback);
        }
        
        function readExampleById(id, callback){
            $http
                .get("/rest/example/"+id)
                .success(callback);
        }
        
        function createExample(example, callback){
            $http
                .post("/rest/example",example)
                .success(callback);
        }
        
        function updateExample(id, example, callback){
            $http 
                .put("/rest/example/"+id, example)
                .success(callback);
        }
        
        function deleteExample(id,callback){
            $http
                .delete("/rest/example/"+id)
                .success(callback);
        }
        
    }
    
})()