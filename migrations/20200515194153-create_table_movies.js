module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('movies', {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
       },
      title: {
         type: Sequelize.STRING(200),
         allowNull: false
       },
      description: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      poster: {
        type: Sequelize.STRING(192),
        allowNull: false
      },
      watched: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('movies');
  }
};
