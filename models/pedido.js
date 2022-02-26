'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Método auxiliar para definir asociaciones.
     * Este método no forma parte del ciclo de vida de Sequelize.
     * El archivo `models/index` llamará a este método automáticamente.
     */
    static associate(models) {
      // definir asociación aquí.
      this.belongsTo(models.Pelicula, {
        foreignKey: 'peliculaId'
      });
      this.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId'
      });
    }
  };
  Pedido.init({
    precio: DataTypes.INTEGER,
    peliculaId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};