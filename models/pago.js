'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pago extends Model {
    /**
     * Método auxiliar para definir asociaciones.
     * Este método no forma parte del ciclo de vida de Sequelize.
     * El archivo `models/index` llamará a este método automáticamente.
     */
    static associate(models) {
      // definir asociación aquí.
      this.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId'
      });
    }
  };
  Pago.init({
    tarjeta: DataTypes.STRING,
    paypal: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pago',
  });
  return Pago;
};