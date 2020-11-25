var myApp = angular.module("myApp", []);


myApp.controller("myController", function($scope){
	$scope.novoProduto = {};
	$scope.info = "";

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

	$scope.total = 
		$scope.produtos.reduce(getTotal, 0);
		
		function getTotal(total, item) {
		return total + (item.valor * item.quantidade);
	}
});