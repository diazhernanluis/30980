const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mariadb://root:@localhost:3306/mibase');
const queryInterface = sequelize.getQueryInterface();

const productos = sequelize.define('Productos', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
        nombre: {type: DataTypes.STRING(15), allowNull: false},
        codigo: {type: DataTypes.STRING(10), allowNull: false},
        precio: {type: DataTypes.FLOAT},
        stock: {type: DataTypes.INTEGER},
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
});

queryInterface.createTable('productos', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
  nombre: {type: DataTypes.STRING(15), allowNull: false},
  codigo: {type: DataTypes.STRING(10), allowNull: false},
  precio: {type: DataTypes.FLOAT},
  stock: {type: DataTypes.INTEGER}
})

module.exports = {
    productos
}