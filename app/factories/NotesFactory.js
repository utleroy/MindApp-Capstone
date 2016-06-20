"use strict";

app.factory("NotesFactory", function ($q, $http, firebaseURL, AuthFactory) {
  
  return {
      postNewNote:function(newNote){
        let user = AuthFactory.getUser();
        console.log(user, "user activity")
        return $q(function(resolve, reject) {
          $http.post(
            firebaseURL + "items.json",
            JSON.stringify({
              note: newNote.note,
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
    }
    });



  


  // ];
  // console.log(data)

  // return {
  //   notes:function () {
  //     return data;
  //   },
  //   addNote:function (noteTitle) {
  //     var currentIndex = data.length + 1;
  //     data.push({
  //       id:currentIndex, title:noteTitle
  //     });
  //   },
  //   deleteNote:function (id) {
  //     var oldNotes = data;
  //     data = [];

  //     angular.forEach(oldNotes, function (note) {
  //       if (note.id !== id) data.push(note);
  //     });
  //   },
