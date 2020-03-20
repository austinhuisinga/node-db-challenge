
exports.seed = function(knex) {
  return knex('projects')
    .del()
    .then(function () {
      return knex('projects').insert([
        { 
          name: "name: 1", 
          description: "description 1" 
        },
        { 
          name: "name: 2", 
          description: "description 2" 
        },
        { 
          name: "name: 3", 
          description: "description 3" 
        },
      ]);
    });
};
