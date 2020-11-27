var myApp = angular.module("myApp", []);


myApp.controller("myController", function($scope){
	$scope.novoProduto = {};
	$scope.info = "";

	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	$scope.produtos = [
		{descricao: "arroz",  valor:15 , quantidade: 1},
		{descricao: "feijão",  valor:15 , quantidade: 2},
		{descricao: "macarrão",  valor:17 , quantidade: 3}
	];

	$scope.saveProduto = function(){
		$scope.produtos.push($scope.novoProduto);
		$scope.info = "Novo produto adcionado com sucesso!";
		$scope.novoProduto = {};
	};

	$scope.selectProduto = function(produto){
		$scope.clickedProduto = produto;
	};

	$scope.deleteProduto = function(){
		console.log($scope.produtos.indexOf($scope.clickedProduto));
		$scope.produtos.splice($scope.produtos.indexOf($scope.clickedProduto), 1);
		$scope.info = "produto deletado com sucesso!";
	};

	$scope.clearInfo = function(){
		$scope.info = "";
	};


	$scope.$watch('produtos', function (newValue, oldValue, scope) {

		$scope.total = somarValores();

	}, true);

	function somarValores(){
		var soma = 0;
		 
		for (var i=0; i<$scope.produtos.length; i++){      
				soma += $scope.produtos[i].quantidade * $scope.produtos[i].valor;
		}
		return soma;
	} 

});