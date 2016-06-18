"use strict";

app3.factory("NotesFactory", function () {
    var data = [
        {note:"Note 0", id:0},
        {note:"Note 1", id:1},
        {note:"Note 2", id:2},
        {note:"Note 3", id:3}
        

    ];
        console.log(data)

    return {
        notes:function () {
            return data;
        },
        addNote:function (noteTitle) {
            var currentIndex = data.length + 1;
            data.push({
                id:currentIndex, title:noteTitle
            });
        },
        deleteNote:function (id) {
            var oldNotes = data;
            data = [];

            angular.forEach(oldNotes, function (note) {
                if (note.id !== id) data.push(note);
            });
        }
    };
})