'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
        username: 'k.kouakouabel96@gmail.com',
        password: 'IngenieurPro96',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
   
  },

  async down (queryInterface, Sequelize) {
     
     await queryInterface.bulkDelete('Users', null, {});
   
  }
};
