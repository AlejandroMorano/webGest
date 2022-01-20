const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	return sequelize.define(
		'clientes',
		{
			id: {
				type: DataTypes.BIGINT, // 64 bit integer
				autoIncrement: true, // automatically incrementing primary key
				primaryKey: true // primary key
			},
			nombre: {
				type: DataTypes.STRING // varchar(255)
			},
			direccion: {
				type: DataTypes.STRING // varchar(255)
			},
			codPostal: {
				type: DataTypes.STRING // varchar(255)
			},
			telefono: {
				type: DataTypes.STRING // varchar(255)
			},
			email: {
				type: DataTypes.STRING // varchar(255)
			},
			cuit: {
				type: DataTypes.STRING // varchar(255)
			},
			dni: {
				type: DataTypes.STRING // varchar(255)
			},
			saldo: {
				type: DataTypes.DECIMAL(10, 2) // decimal(10,2)
			},
			nroIngresosBrutos: {
				type: DataTypes.STRING // varchar(255)
			},
			CtaCte: {
				type: DataTypes.BOOLEAN // boolean
			},
			listaDePrecios: {
				type: DataTypes.STRING // varchar(255)
			}
		},
		{
			timestamps: true
		}
	);
};
