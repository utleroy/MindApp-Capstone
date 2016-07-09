"use strict";

app.factory("NotesFactory", function ($q, $http, firebaseURL, AuthFactory) {

  var getItemList = function(){
    var items = [];
    let user = AuthFactory.getUser();
    return $q(function(resolve, reject){
     $http.get(`${firebaseURL}items.json?orderBy="uid"&equalTo="${user.uid}"`)
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
  
  var deleteItem = function(itemId){
    return $q(function(resolve, reject){
      $http
      .delete(firebaseURL + "items/" + itemId + ".json")
      .success(function(objectFromFirebase){
        resolve(objectFromFirebase);
      });
    });
  };
  
  var postNewNote = function(newNote){
    let user = AuthFactory.getUser();
    console.log(user, "user activity")
    return $q(function(resolve, reject) {
      $http.post(
        firebaseURL + "items.json",
        JSON.stringify({
          note: newNote,
          uid: user.uid
        })
        )
      .success(
        function(objectFromFirebase) {
          resolve(objectFromFirebase);
        }
        );
    });
  };

  var updateNote = function (itemId, newNote) {
    let user = AuthFactory.getUser();
    return $q(function(resolve, reject) {
      $http.put(
        firebaseURL + "items/" + itemId + ".json",
        JSON.stringify({
          note: newNote,
          uid: user.uid
        })
        )
      .success(
        function(objectFromFirebase) {
          resolve(objectFromFirebase);
        })
    })
  }
  // var hold = function(holdTools){
  //   let user = AuthFactory.getUser();
  //   console.log(user, "user activity")
  //   return $q(function(resolve, reject) {
  //     $http.post(
  //       firebaseURL + "items.json",
  //       JSON.stringify({
  //         tool: holdTools,
  //         uid: user.uid
  //       })
  //       )
  //     .success(
  //       function(objectFromFirebase) {
  //         resolve(objectFromFirebase);
  //       }
  //       );
  //   });
  // };

    var postNewMindTool = function(newTool){
    let user = AuthFactory.getUser();
    console.log(user, "new tools")
    return $q(function(resolve, reject) {
      $http.post(
        firebaseURL + "items.json",
        JSON.stringify({
          tool: "",
          uid: user.uid
        })
        )
      .success(
        function(objectFromFirebase) {
          resolve(objectFromFirebase);
        }
        );
    });
  }




  return {postNewMindTool:postNewMindTool, updateNote:updateNote, postNewNote:postNewNote, deleteItem:deleteItem, getItemList:getItemList};

});

