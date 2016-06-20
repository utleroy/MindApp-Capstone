'use strict';

app.factory("MindFactory", function($q, $http, firebaseURL, AuthFactory){


  var mindItem = function(){
    var items = [];
    console.log(items)
    return $q(function(resolve, reject){
      $http.get(firebaseURL + "items.json")
      .success(function(itemObject){
       var itemCollection = itemObject;
       Object.keys(itemCollection).forEach(function(key){
        itemCollection[key].id=key;
        items.push(itemCollection[key]);
      });
       resolve(items);
     })
      .error(function(error){
       reject(error);
     });
    });
  };



  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
});
