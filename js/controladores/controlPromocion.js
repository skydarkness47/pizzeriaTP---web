miApp.controller("promocionCtrl",function($scope,$auth,$state,FileUploader,factoryProducto,factoryPromocion,factoryLocal,factoryGrilla){
	console.log(factoryProducto.ApiArchivos());//inicio las variables
	$scope.SubirdorArchivos = new FileUploader({url:factoryProducto.ApiArchivos()});  
  if($auth.isAuthenticated())
$scope.user = $auth.getPayload();

  	/*$scope.persona.nombre= "natalia" ;
  	$scope.persona.dni= "1" ;
  	$scope.persona.apellido= "natalia" ;
  	$scope.persona.foto="pordefecto.png";
  	*///$scope.persona.foto="http://localhost:8080/Laboratorio-IV-2016/Clase.07/ws1/fotos/pordefecto.png";
$scope.Deslogueo = function(){

        $auth.logout();
        $state.go("inicio");
      }
  $scope.promocion={};

    


   factoryProducto.TraerTodosProductos()
                .then(function(respuesta) {
                 $scope.listapizzas={};
                  $scope.listapizzas= respuesta;
                });


factoryLocal.TraerTodosLosLocales()
          .then(function(respuesta) {
                 $scope.listalocales={};
                  $scope.listalocales= respuesta;
                });


$scope.Guardar = function () {

        console.info($scope.promocion);

        if ($scope.objeSeleccionadoPizza == null && $scope.objeSeleccionadoLocal == null)
            return;

        $scope.promocion.id_local = $scope.objeSeleccionadoLocal.id_local;
        $scope.promocion.id_pizza = $scope.objeSeleccionadoPizza.id_pizza;
        console.info($scope.promocion);
        factoryPromocion.InsertarPromocion(JSON.stringify($scope.promocion))
            .then(function (respuesta) {
              // $state.go("Abm.PromocionGrilla");

            }, function (error) {
                console.info(error);
            });
    }

        $scope.gridOptions = {};
        $scope.gridOptions.enableCellEditOnFocus = true;
        $scope.gridOptions.enableCellEdit = true;
        $scope.gridOptions.paginationPageSizes = [25, 50, 75];
            $scope.gridOptions.enableFiltering = true;
        // Configuracion de la paginacion
       $scope.gridOptions.paginationPageSize = 25;
   $scope.gridOptions.columnDefs = columPromo();



factoryPromocion.TraerTodasLasPromos()
          .then(function(respuesta) {
                 $scope.listalocales={};
                 console.info(respuesta);
                  $scope.gridOptions.data= respuesta;
                });

       function columPromo () {
  return [
        { field: 'precio_promo', name: 'precio'},
        {field: 'descripcion_pizza', name: 'pizza'},
        {field: 'nombre_local', name: 'local'},
        ];
    
  }
 


})