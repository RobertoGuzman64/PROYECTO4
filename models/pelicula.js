'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Método auxiliar para definir asociaciones.
     * Este método no forma parte del ciclo de vida de Sequelize.
     * El archivo `models/index` llamará a este método automáticamente.
     */
    static associate(models) {
      // definir asociación aquí.
      this.hasMany(models.Pedido, {
        foreignKey: 'peliculaId'
      });
    }
  };
  Pelicula.init({
    titulo: DataTypes.STRING,
    sinopsis: DataTypes.TEXT,  // TEXT //
    adultos: DataTypes.BOOLEAN,
    popularidad: DataTypes.FLOAT,
    imagen: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};