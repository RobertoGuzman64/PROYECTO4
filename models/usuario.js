'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Método auxiliar para definir asociaciones.
     * Este método no forma parte del ciclo de vida de Sequelize.
     * El archivo `models/index` llamará a este método automáticamente.
     */
    static associate(models) {
      // definir asociación aquí.
      this.hasMany(models.Pedido, {
        foreignKey: 'usuarioId'
      });
      this.hasOne(models.Pago, {
        foreignKey: 'usuarioId'
      });
    }
  };
  Usuario.init({
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    apellidos: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    nick: DataTypes.STRING,
    rol: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};