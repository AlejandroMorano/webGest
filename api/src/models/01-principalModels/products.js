const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	return sequelize.define(
		'producto',
		{
			id: {
				type: DataTypes.BIGINT, // 64 bit integer
				autoIncrement: true, // automatically incrementing primary key
				primaryKey: true // primary key
			},
			nombre: {
				type: DataTypes.STRING // varchar(255)
			},
			codBarra1: {
				type: DataTypes.INTEGER // 32 bit integer
			},
			codBarra2: {
				type: DataTypes.INTEGER // 32 bit integer
			},
			codBarra3: {
				type: DataTypes.INTEGER // 32 bit integer
			},
			codBarra4: {
				type: DataTypes.INTEGER // 32 bit integer
			}
		},
		{
			timestamps: true
		}
	);
};
