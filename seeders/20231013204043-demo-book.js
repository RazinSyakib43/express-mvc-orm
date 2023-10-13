"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // books is table name
    return queryInterface.bulkInsert("books", [
      {
        // title and description is column name
        title: "Node JS",
        description: "Learning Node JS for beginner to advanced",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // books is table name
    return queryInterface.bulkDelete("books", null, {});
  },
};
