
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('avengers').del()
    .then(function () {
      // Inserts seed entries
      return knex('avengers').insert([
        {id: 1, name: 'Iron Man', power_level: 80, catchphrase: "I'm gonna lose it"},
        {id: 2, name: 'Black Widow', power_level: 50, catchphrase: "Dramatic loook"},
        {id: 3, name: 'Hulk', power_level: 100, catchphrase: "HULK SMASH"},
        {id: 4, name: 'Hawkeye', power_level: 12, catchphrase: "Name's Clint"},
        {id: 5, name: 'Captain America', power_level: 30, catchphrase: "USA USA USA!"},
        {id: 6, name: 'Thor', power_level: 110, catchphrase: "Bring me thanos!"},
        {id: 7, name: 'FAnt-man', power_level: 49, catchphrase: "Can you let me in?"}
      ]);
    });
};
