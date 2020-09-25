module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('parceiro2', {
      id_parceiro:{
          type: DataTypes.INTEGER,
          primaryKey:true
        },
      usuario: DataTypes.STRING,
      senha: DataTypes.STRING,
      },{
          tableName: 'parceiro2'
      })
    return User;
  };