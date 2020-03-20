
exports.seed = function(knex) {
  return knex('tasks')
    .del()
    .then(function () {
      return knex('tasks').insert([
        { 
          description: "A TASK",
          notes: "woo!",
          completed: false,
          project_id: 1
        },
        { 
          description: "A TASK 2: ELECTRIC BOOGALOO",
          notes: "woo!!",
          completed: false,
          project_id: 2
        },
        { 
          description: "THE TASK OF TASKS",
          notes: "WOO!!!",
          completed: false,
          project_id: 3
        },
      ]);
    });
};


// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex("tasks")
//     .del()
//     .then(function() {
//       // Inserts seed entries
//       return knex("tasks").insert([
//         {
//           description: "a simple description of a task on project 1",
//           notes: "a simple note",
//           completed: false,
//           project_id: 1
//         },
//         {
//           description: "a simple description of a task  on project 1",
//           notes: null,
//           completed: false,
//           project_id: 1
//         },
//         {
//           description: "a simple description of s task  on project 2",
//           notes: "a simple note",
//           completed: false,
//           project_id: 2
//         }
//       ]);
//     });
// };