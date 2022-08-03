'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Pokemons', [{
      name:"Floette",
      image:"https://www.pokemontrash.com/pokedex/images/minixy/670.png",
       createdAt: new Date(),
       updatedAt: new Date()
     }],
    {});
   
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Pokemons', null, {});
  }
};
