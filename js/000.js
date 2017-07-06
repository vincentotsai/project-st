(function () {
  var app = angular.module('SynonymLib', [])
  app.controller('synonymLibCtrl', function ($scope,synonymSrv) {

    $scope.search = function () {
      console.log($scope.synonym)
      synonymSrv.getSynonymList($scope.synonym).then(function(data){
        $scope.list = data.data.wordList;
      })
    }
    
    // $scope.list = ['老婆', '爱人', '老伴儿', '媳妇', '内人']

    $scope.edit = function (index, oldItem) {
      var editItem = prompt('编辑：', oldItem)
      if (editItem) {
        $scope.list[index] = editItem
      }
    }

    $scope.remove = function (index) {
      if (!confirm('确定删除？')) {
        return
      }
      $scope.list.splice(index, 1)
    }

    $scope.add = function (index) {
      var newItem = prompt('新增：')
      $scope.list.push(newItem)
    }

  })

  app.service('synonymSrv',function($http,$q){

    this.getSynonymList = function(word){
      var d = $q.defer()
      $http.post('/synonym',{funcName:'thesaurusController.getSimilarWord',word:word})
      .then(function(result){
        console.log('result::',result)
       return d.resolve(result)
      })
      return d.promise
    }

    
  })
})()