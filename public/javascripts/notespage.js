
// var needNote = function(){

//     // var apiUrl = 'https://api.doughnuts.ga/doughnuts';

//     function addNote(note){
//            $('#post-note-section').append("<li>" + note.title + " -- <em>" + note.text + "</em></li>");
//       }

//     // function getNote(){
//     //    $.get(apiUrl , function(doughnuts){

//     //       $.each(doughnuts, function(index, doughnut){
//     //         addDoughnut(doughnut);
//     //       });
//     //     });
//     // };

//       $('#new-note-form').submit(function(event){
//           event.preventDefault();

//           var newNote = {
//             "tite": $('#note-title').val(),
//             "text": $('#note-text').val(),
//           };

//       createNewNote(newNote);
//     });

//       function createNewNote(newNote){
//            $.ajax({
//                 // url: apiUrl,
//                 type: 'POST',
//                 data: newNote,
//                 success: function(note){
//                   addNote(note);
//                 }
//           });
//       };
//     getNotes();

// };
