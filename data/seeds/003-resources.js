
exports.seed = function(knex) {
  return knex('resources')
    .del()
    .then(function () {
      return knex('resources').insert([
        { 
          name: "SWOT Board", 
          description: "Big decision to make? SWOT it!" 
        },
        { 
          name: "Smart Fridge", 
          description: "Suck it, Jian Yang." 
        },
        { 
          name: "Various other corporate resources", 
          description: "A necessity." 
        },
      ]);
    });
};
