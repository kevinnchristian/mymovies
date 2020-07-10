  module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define(
    "Movies",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
     title: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
     description: {
       type: DataTypes.STRING(500),
       allowNull: false
     },
     poster: {
       type: DataTypes.STRING(192),
       allowNull: false
     },
     watched: {
       type: DataTypes.BOOLEAN,
       allowNull: false
     },
     createdAt: DataTypes.DATE,
     updatedAt: DataTypes.DATE
    });

  return Movies;

};